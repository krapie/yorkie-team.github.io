// Similiar structure to:
// https://github.com/JS-DevTools/rehype-inline-svg/blob/master/src/inline-svg.ts
import imageSize from 'image-size';
import path from 'path';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';
import { promisify } from 'util';

const sizeOf = promisify(imageSize);

/**
 * An `<img>` HAST node
 */
interface ImageNode extends Node {
  type: 'element';
  tagName: 'img';
  properties: {
    src: string;
    alt: string;
    height?: number;
    width?: number;
  };
}

/**
 * Determines whether the given HAST node is an `<img>` element.
 */
function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode;
  return img.type === 'element' && img.tagName === 'img' && img.properties && typeof img.properties.src === 'string';
}

/**
 * Filters out non absolute paths from the public folder.
 */
function filterImageNode(node: ImageNode): boolean {
  return node.properties.src.startsWith('/');
}

/**
 * Adds the image's `height` and `width` to it's properties.
 */
async function addMetadata(node: ImageNode): Promise<void> {
  const res = await sizeOf(path.join(process.cwd(), 'public', node.properties.src));

  if (!res) throw Error(`Invalid image with src "${node.properties.src}"`);

  node.properties.width = res.width;
  node.properties.height = res.height;
}

/**
 * This is a Rehype plugin that finds image `<img>` elements and adds the height and width to the properties.
 */
export default function rehypeImageMeta() {
  return async function transformer(tree: Node): Promise<Node> {
    const imgNodes: ImageNode[] = [];

    visit(tree, 'element', (node) => {
      if (isImageNode(node) && filterImageNode(node)) {
        imgNodes.push(node);
      }
    });

    for (const node of imgNodes) {
      await addMetadata(node);
    }

    return tree;
  };
}
