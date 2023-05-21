export type ShoppingTileType = {
    id: number;
    name: string;
    title: string;
    imgPath: string;
    description: string;
    specialPrice: boolean;
};

// Would put it as a JSON, but the data would come from the backend usually anyways.

const scottControllerTile: ShoppingTileType = {
    id: 0,
    name: "Scott Controller",
    title: "Controller built by Scott \"Markers\"",
    imgPath: "controllerMarkers.jpg",
    description: "A controller built by my american friend Scott. His nickname is Markers. This name originates from his travels with his acapella group of engineers through the country to show highschool students that music can be a hobby, even if you do not plan to pursue it as a carreer. In one of the schools he managed to tip over a box of markers twice before being able to introduce himself. He loves building controllers so he built one for me.",
    specialPrice: true
};

const standardControllerTile: ShoppingTileType = {
    id: 1,
    name: "Normal Controller",
    title: "Controller built by a company",
    imgPath: "controllerStandard.jpg",
    description: "A normal controller I got some time.",
    specialPrice: false
};


export const shoppingTiles: ShoppingTileType[] = [ 
    scottControllerTile,
    standardControllerTile
]

export const ShippingTileIdToNameMap = new Map<number, string>([    
    [scottControllerTile.id, scottControllerTile.name],
    [standardControllerTile.id, standardControllerTile.name]
])