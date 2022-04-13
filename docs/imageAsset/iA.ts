// imageAsset object types

export interface ImageAsset {
    _createdAt:       string;
    _id:              string;
    _rev:             string;
    _type:            "sanity.imageAsset";
    _updatedAt:       string;
    assetId:          string;
    extension:        string;
    metadata:         Metadata;
    mimeType:         string;
    originalFilename: string;
    path:             string;
    sha1hash:         string;
    size:             number;
    uploadId:         string;
    url:              string;
}

export interface Metadata {
    _type:      "sanity.imageMetadata";
    blurHash:   string;
    dimensions: Dimensions;
    hasAlpha:   boolean;
    isOpaque:   boolean;
    lqip:       string;
    palette:    Palette;
}

export interface Dimensions {
    _type:       "sanity.imageDimensions";
    aspectRatio: number;
    height:      number;
    width:       number;
}

export interface Palette {
    _type:        "sanity.imagePalette";
    darkMuted:    PaletteSwatch;
    darkVibrant:  PaletteSwatch;
    dominant:     PaletteSwatch;
    lightMuted:   PaletteSwatch;
    lightVibrant: PaletteSwatch;
    muted:        PaletteSwatch;
    vibrant:      PaletteSwatch;
}

export interface PaletteSwatch {
    _type:      "sanity.imagePaletteSwatch";
    background: string;
    foreground: string;
    population: number;
    title:      string;
}
