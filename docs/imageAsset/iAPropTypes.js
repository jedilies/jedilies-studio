import PropTypes from "prop-types";

let _ImageAsset;
let _Metadata;
let _Dimensions;
let _Palette;
let _DarkMuted;
_ImageAsset = PropTypes.shape({
  "_createdAt": PropTypes.string,
  "_id": PropTypes.string,
  "_rev": PropTypes.string,
  "_type": PropTypes.string,
  "_updatedAt": PropTypes.string,
  "assetId": PropTypes.string,
  "extension": PropTypes.string,
  "metadata": _Metadata,
  "mimeType": PropTypes.string,
  "originalFilename": PropTypes.string,
  "path": PropTypes.string,
  "sha1hash": PropTypes.string,
  "size": PropTypes.number,
  "uploadId": PropTypes.string,
  "url": PropTypes.string,
});
_DarkMuted = PropTypes.shape({
    "_type": PropTypes.string,
    "background": PropTypes.string,
    "foreground": PropTypes.string,
    "population": PropTypes.number,
    "title": PropTypes.string,
});
_Palette = PropTypes.shape({
    "_type": PropTypes.string,
    "darkMuted": _DarkMuted,
    "darkVibrant": _DarkMuted,
    "dominant": _DarkMuted,
    "lightMuted": _DarkMuted,
    "lightVibrant": _DarkMuted,
    "muted": _DarkMuted,
    "vibrant": _DarkMuted,
});
_Dimensions = PropTypes.shape({
    "_type": PropTypes.string,
    "aspectRatio": PropTypes.number,
    "height": PropTypes.number,
    "width": PropTypes.number,
});
_Metadata = PropTypes.shape({
    "_type": PropTypes.string,
    "blurHash": PropTypes.string,
    "dimensions": _Dimensions,
    "hasAlpha": PropTypes.bool,
    "isOpaque": PropTypes.bool,
    "lqip": PropTypes.string,
    "palette": _Palette,
});

export const ImageAsset = _ImageAsset;
