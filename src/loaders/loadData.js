/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import fetchAndCache from './fetchAndCache';
import parseDataAndSequences from '../parsers/parseDataAndSequences';
import { LATEST_EMOJI_VERSION } from '../constants';

import type { EmojiDataMap } from '../types';

export default function loadData(version: string = LATEST_EMOJI_VERSION): EmojiDataMap {
  return fetchAndCache(
    `http://unicode.org/Public/emoji/${version}/emoji-data.txt`,
    `data-${version}.json`,
    data => parseDataAndSequences(version, data),
  );
}
