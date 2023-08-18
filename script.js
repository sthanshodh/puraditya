(function(){
    var script = {
 "shadow": false,
 "downloadEnabled": false,
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.IconButton_AED86E5D_A06A_09C8_4180_B10C03552EFB",
  "this.Image_D24FFF70_F912_E467_41D7_2CFE2FEC6C58",
  "this.Image_D4F8C890_F911_ECA7_41E4_B921719CA496"
 ],
 "width": "100%",
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_840627F6_8819_1126_41D8_593CAA163830_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Puraditya Math (6)",
 "id": "panorama_840627F6_8819_1126_41D8_593CAA163830",
 "overlays": [
  "this.overlay_CD66F5B4_881F_1139_41C6_A68508D87A05",
  "this.overlay_CE706DB3_8819_313F_41A5_5F016E3C0ABD",
  "this.overlay_C06FC164_882B_315A_41DA_0E02082F1ACE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE3C8496_FF6C_09F4_41C5_E4441C69C86E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE3CB496_FF6C_09F4_41EB_DD6BC52525F4",
 "initialSequence": "this.sequence_EE3C8496_FF6C_09F4_41C5_E4441C69C86E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (8)",
 "id": "panorama_83F09F55_8819_117A_41C8_5EE5232FB520",
 "overlays": [
  "this.overlay_96D547AF_8819_1126_41D4_6AE4A7FF4B42",
  "this.overlay_975542C6_8818_F359_41D8_DF95B01318A6",
  "this.overlay_A88B41B7_88E7_7126_41C8_A1A2C31F33F6",
  "this.overlay_963F9E34_88E7_1339_41DE_F9464C113DC8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84097F44_8819_1159_41AC_A24AD754426D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (7)",
 "id": "panorama_82623EF2_881B_133E_41D7_F5E60A69931B",
 "overlays": [
  "this.overlay_B7B4E46C_8879_172A_41E1_087B98A07188",
  "this.overlay_B71D09F8_8879_7129_41C8_4C8E693D090C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826A6B02_881B_12DE_41CA_89AC113E404C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EFA46347_FF6C_0F54_41D8_6F303A73B89A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFA48347_FF6C_0F54_41EB_43E94EEDDDEB",
 "initialSequence": "this.sequence_EFA46347_FF6C_0F54_41D8_6F303A73B89A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED8CC6F9_FF6C_093C_41D2_F71CADAD3FB1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED8D16F9_FF6C_093C_41B1_633B277A7D40",
 "initialSequence": "this.sequence_ED8CC6F9_FF6C_093C_41D2_F71CADAD3FB1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 132.24,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF97C31E_FF6C_08F4_41C8_A2C3AA2648E4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF97F31E_FF6C_08F4_41E8_2071DD7C2070",
 "initialSequence": "this.sequence_EF97C31E_FF6C_08F4_41C8_A2C3AA2648E4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_AED86E5D_A06A_09C8_4180_B10C03552EFB",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_8436733A_8819_112E_41D3_781CB6DC8810_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC66F7CA_FF6C_175C_41D3_1F8D6C66CDFC",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC66E7CA_FF6C_175C_41D0_5A3095C9E11E",
 "initialSequence": "this.sequence_EC66F7CA_FF6C_175C_41D3_1F8D6C66CDFC",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (5)",
 "id": "panorama_82635422_8818_F6D9_41D8_128C70754614",
 "overlays": [
  "this.overlay_B2008837_8869_1F26_41D9_47C9301B8C26",
  "this.overlay_B3DA6D28_8869_312A_41A7_A02D82727003",
  "this.overlay_B282D3E2_886B_1159_41D8_C7432781E036",
  "this.overlay_B3F760F9_886B_0F2B_41A3_90D664EF5988",
  "this.overlay_B53BAD40_886B_1159_41BD_6089E522B5F0",
  "this.overlay_D07F12AA_8839_1329_41C1_86219577F091"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_824A89C7_8819_1166_41D8_608468B8A43B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_836A903D_8819_0F2A_41D0_0B24250C7C06"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE433399_FF6C_0FFC_41D1_10C19FA8A031",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE435399_FF6C_0FFC_41E0_CD1B88FBA7EF",
 "initialSequence": "this.sequence_EE433399_FF6C_0FFC_41D1_10C19FA8A031",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (1)",
 "hfovMin": "130%",
 "id": "panorama_85D6E643_8819_735E_41E0_2B93A22791B6",
 "overlays": [
  "this.overlay_86FE8297_883B_13E7_41D1_4B2C4AAA13A7",
  "this.overlay_86F0A955_8839_117B_4190_1E8C283854BA",
  "this.overlay_99E80814_8829_1EF9_41C5_E398F63B6560",
  "this.overlay_99A504DE_8829_1769_41C7_80911A2CEE37",
  "this.overlay_9B708A33_8829_133E_41D6_380A066E15B5",
  "this.overlay_98A4A10E_8829_0EE9_41B0_F1C30B6F9C34",
  "this.overlay_9C2D2B75_886F_313A_41DF_FE8F66205D89"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84058082_8819_0FDE_41AD_F27316848255"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8406D831_881F_1F3B_41C0_438B574CC920"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8417C642_881F_7359_41D3_634DA2A8F5BF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840A1492_881F_37FE_41E0_470C2F837010"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84080A39_8819_332A_41D4_E05441E9BF55"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_t.jpg",
 "hfovMax": 149
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (12)",
 "id": "panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE",
 "overlays": [
  "this.overlay_AEE7A78F_88EB_11E7_41DA_4DA6D8B8870E",
  "this.overlay_A062A28F_88E9_33E6_41CA_8A4C33F0BAD4",
  "this.overlay_AE11BD73_88E9_113F_4192_AA22D9E7C128",
  "this.overlay_A0982498_88EF_17EA_41DF_097709BFFDEE",
  "this.overlay_DB6F2541_8818_F15A_41D1_A63E65AF6F25"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84097F44_8819_1159_41AC_A24AD754426D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826A6B02_881B_12DE_41CA_89AC113E404C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (17)",
 "id": "panorama_8406D831_881F_1F3B_41C0_438B574CC920",
 "overlays": [
  "this.overlay_A76B8198_8839_31E9_41A7_46C12CB8759E",
  "this.overlay_B8F791F2_8839_1139_41B6_EEF99DB4DC37"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84058082_8819_0FDE_41AD_F27316848255"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (4)",
 "id": "panorama_8263654E_8819_1166_41D1_2CCB9E1131E2",
 "overlays": [
  "this.overlay_BF756EE8_881B_332A_41E0_CE4EC8747AA0",
  "this.overlay_B0F9F918_881B_1EEA_41DF_FA7725662D55",
  "this.overlay_B198DC03_8819_16DF_41D4_9C09DDE13D7D",
  "this.overlay_B0DD804B_8819_0F6E_41AD_1D49EBB3F32D",
  "this.overlay_B168FC39_8867_172A_41DA_7E139BE3B11C",
  "this.overlay_CB39AA59_886B_336B_41C3_C4860BCF56ED"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840627F6_8819_1126_41D8_593CAA163830"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_824A89C7_8819_1166_41D8_608468B8A43B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82635422_8818_F6D9_41D8_128C70754614"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_836A903D_8819_0F2A_41D0_0B24250C7C06"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC533163_FF6C_0B4C_41EC_05A641820B02",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC535163_FF6C_0B4C_41D3_EBAF8397DA1C",
 "initialSequence": "this.sequence_EC533163_FF6C_0B4C_41EC_05A641820B02",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -174.12,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE9FFEF6_FF6C_3934_41EE_79AE81B966C6",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE9FCEF6_FF6C_3934_41E7_606A4334F03D",
 "initialSequence": "this.sequence_EE9FFEF6_FF6C_3934_41EE_79AE81B966C6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -73.47,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_85D6E643_8819_735E_41E0_2B93A22791B6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECBE723F_FF6C_0934_41EE_143752CD475F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECBE623F_FF6C_0934_41E6_B4206BAB8823",
 "initialSequence": "this.sequence_ECBE723F_FF6C_0934_41EE_143752CD475F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC986220_FF6C_08CC_41D8_1FD4D4794E8A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC98B220_FF6C_08CC_41D5_2BDFDF7761D5",
 "initialSequence": "this.sequence_EC986220_FF6C_08CC_41D8_1FD4D4794E8A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.84,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED157FFD_FF6C_3734_41E6_3ACF55930F8B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED15AFFD_FF6C_3734_41E0_6CF955FAB563",
 "initialSequence": "this.sequence_ED157FFD_FF6C_3734_41E6_3ACF55930F8B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -61.71,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE4BC38F_FF6C_0FD4_41EF_6224BBFD5CC8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE4BF38F_FF6C_0FD4_41CD_7537B11462B5",
 "initialSequence": "this.sequence_EE4BC38F_FF6C_0FD4_41EF_6224BBFD5CC8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -66.86,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_8406D831_881F_1F3B_41C0_438B574CC920_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE5813AD_FF6C_0FD4_41EC_FAE204094434",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE5803AD_FF6C_0FD4_41C7_E2974365FA7D",
 "initialSequence": "this.sequence_EE5813AD_FF6C_0FD4_41EC_FAE204094434",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC7707E9_FF6C_175C_41E5_518245646022",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC7757E9_FF6C_175C_419B_26B6A9D08278",
 "initialSequence": "this.sequence_EC7707E9_FF6C_175C_41E5_518245646022",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDD87097_FF6C_09F4_41C8_8F4C0F8C2902",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDD89097_FF6C_09F4_41DA_3C5DA1E52E42",
 "initialSequence": "this.sequence_EDD87097_FF6C_09F4_41C8_8F4C0F8C2902",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 7.35
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDADD73E_FF6C_1734_41E9_108EFA4F1535",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDADF73E_FF6C_1734_41E4_99F720E5960C",
 "initialSequence": "this.sequence_EDADD73E_FF6C_1734_41E9_108EFA4F1535",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -27.18,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEF9B538_FF6C_0B3D_41A0_17354EC2F4F4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEF9D538_FF6C_0B3D_41E0_7236B31AA16B",
 "initialSequence": "this.sequence_EEF9B538_FF6C_0B3D_41A0_17354EC2F4F4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -29.39,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED9C00EB_FF6C_095C_41DB_E6F9E7013131",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED9C20EB_FF6C_095C_41C9_6304C1BEB14C",
 "initialSequence": "this.sequence_ED9C00EB_FF6C_095C_41DB_E6F9E7013131",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -141.8,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECDBF88C_FF6C_19D4_41CF_067F2CA10F4F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECD8088C_FF6C_19D4_41B6_A8E28407A06E",
 "initialSequence": "this.sequence_ECDBF88C_FF6C_19D4_41CF_067F2CA10F4F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 110.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Puraditya Math (2)",
 "id": "panorama_8430CEEA_881F_3329_41B1_241573C33BA1",
 "overlays": [
  "this.overlay_C1D28F9B_882F_11EF_41C2_E62786D8A70F",
  "this.overlay_C1792294_882F_73FA_41D6_E72D87270443",
  "this.overlay_C2F350A7_8829_0F27_41D9_11CDDCA1C157"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_842D5078_881F_0F29_41D0_E002DB468D4B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8436733A_8819_112E_41D3_781CB6DC8810"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_ED340685_FF6C_09D4_41EA_7E3C6625CE94",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED345685_FF6C_09D4_41E4_7C1440286B79",
 "initialSequence": "this.sequence_ED340685_FF6C_09D4_41EA_7E3C6625CE94",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED9D7728_FF6C_08DC_41EE_81186F5F13F8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED9D9728_FF6C_08DC_41E4_DA06C1F18DF7",
 "initialSequence": "this.sequence_ED9D7728_FF6C_08DC_41EE_81186F5F13F8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECD551E3_FF6C_0B4C_41D5_0E535D6911D7",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECD541E3_FF6C_0B4C_41DD_ADAA2CEB2888",
 "initialSequence": "this.sequence_ECD551E3_FF6C_0B4C_41D5_0E535D6911D7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEB37F4B_FF6C_375C_41E4_373FE9EA4B9A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEB3AF4B_FF6C_375C_41E2_FE16F8EC44F8",
 "initialSequence": "this.sequence_EEB37F4B_FF6C_375C_41E4_373FE9EA4B9A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.18,
  "class": "PanoramaCameraPosition",
  "pitch": -12.49
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (2)",
 "id": "panorama_9651EF51_8839_117B_41C6_84DBEA210F52",
 "overlays": [
  "this.overlay_9651CF51_8839_117B_41DE_C7F167C7C5F1",
  "this.overlay_9651DF51_8839_117B_41E0_DBF958D0CF3A",
  "this.overlay_9651AF52_8839_1179_41E0_F61E49FDD022",
  "this.overlay_9651BF52_8839_1179_41C2_42D480BAE681",
  "this.overlay_96518F52_8839_1179_41B6_142FD10AEDA1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840A1492_881F_37FE_41E0_470C2F837010"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F43DA9_8819_712B_41B4_52595D130F77"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EB0D0286_FF6C_09D4_41E3_20FC3A00BC54",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EB0D4286_FF6C_09D4_41BE_777FF70E70A9",
 "initialSequence": "this.sequence_EB0D0286_FF6C_09D4_41E3_20FC3A00BC54",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDDB46B1_FF6C_09CC_41E0_AECCCC7265CA",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDDB66B1_FF6C_09CC_41E1_7619534F985A",
 "initialSequence": "this.sequence_EDDB46B1_FF6C_09CC_41E0_AECCCC7265CA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED8E60DC_FF6C_0974_41B6_32033A4D864D",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED8E90DC_FF6C_0974_41E3_B668EB359962",
 "initialSequence": "this.sequence_ED8E60DC_FF6C_0974_41B6_32033A4D864D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE67EE03_FF6C_38D3_41EC_C10EE8884C05",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE67CE03_FF6C_38D3_41D7_E79CC7EE935B",
 "initialSequence": "this.sequence_EE67EE03_FF6C_38D3_41EC_C10EE8884C05",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 168.98,
  "class": "PanoramaCameraPosition",
  "pitch": -9.55
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EECA24DB_FF6C_097C_41E0_5A21C32581C5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EECA54DB_FF6C_097C_41EC_B28A2808638B",
 "initialSequence": "this.sequence_EECA24DB_FF6C_097C_41E0_5A21C32581C5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.92,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EB4D1924_FF6C_18D4_41AA_E0C2BB34DDEC",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EB4D3924_FF6C_18D4_41B1_E628553DE83D",
 "initialSequence": "this.sequence_EB4D1924_FF6C_18D4_41AA_E0C2BB34DDEC",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -71.27,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE962587_FF6C_0BD3_41AB_47D8C7895F08",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE967587_FF6C_0BD3_41D1_4751F5C93CF8",
 "initialSequence": "this.sequence_EE962587_FF6C_0BD3_41AB_47D8C7895F08",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92.57,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE8D8559_FF6C_0B7C_41E8_681CABD596B9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE8DA559_FF6C_0B7C_41E0_E3055A8D390E",
 "initialSequence": "this.sequence_EE8D8559_FF6C_0B7C_41E8_681CABD596B9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 73.47,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Puraditya Math (1)",
 "id": "panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E",
 "overlays": [
  "this.overlay_CCAE80B2_8867_0F39_4169_11C2CBBD861A",
  "this.overlay_CDDAD4E4_8867_1759_41C8_E2BEEE83026B",
  "this.overlay_CD7D0CC1_8818_F75A_41C4_93BA367B5F96"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840627F6_8819_1126_41D8_593CAA163830"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82635422_8818_F6D9_41D8_128C70754614"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EDE9D6D0_FF6C_094C_41DB_A8FF939AAC2F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDE9F6D0_FF6C_094C_41E8_A5C3EC00B846",
 "initialSequence": "this.sequence_EDE9D6D0_FF6C_094C_41DB_A8FF939AAC2F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_84097F44_8819_1159_41AC_A24AD754426D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC9F48DD_FF6C_1974_41C3_7682FBC1EB58",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC9F78DD_FF6C_1974_41E0_FA62C05A53B3",
 "initialSequence": "this.sequence_EC9F48DD_FF6C_1974_41C3_7682FBC1EB58",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 138.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Narayan Math (2)",
 "id": "panorama_8430DB27_8819_1127_41D1_76C0382FB641",
 "overlays": [
  "this.overlay_C7AA7127_882F_1127_41BE_8AAE75C557D5",
  "this.overlay_D8DB9C78_8829_3729_41BB_3AE5BF08910F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8623B92F_8819_F127_4193_EB189FF61F98"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EB526956_FF6C_1B75_41B4_009A24AB2CD1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EB528956_FF6C_1B75_41E2_596BF9D616E3",
 "initialSequence": "this.sequence_EB526956_FF6C_1B75_41B4_009A24AB2CD1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -8.82,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_8430CEEA_881F_3329_41B1_241573C33BA1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_82635422_8818_F6D9_41D8_128C70754614_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (9)",
 "id": "panorama_83F43DA9_8819_712B_41B4_52595D130F77",
 "overlays": [
  "this.overlay_A8A97A82_88E9_13D9_41DE_A9688C510B1A",
  "this.overlay_A82D7245_88E8_F35B_41DC_031FA0B974A6",
  "this.overlay_A9551BF3_88EF_713E_41BA_AE653F903601",
  "this.overlay_977741C0_88EF_115A_41E1_0948CFE4AEDE",
  "this.overlay_A9E82477_88E9_1726_41AD_C5B4A43E64FC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840A1492_881F_37FE_41E0_470C2F837010"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F09F55_8819_117A_41C8_5EE5232FB520"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EFB57D94_FF6C_3BF4_41B6_BDC1A00DD810",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFB54D94_FF6C_3BF4_41E2_8A750DF2B993",
 "initialSequence": "this.sequence_EFB57D94_FF6C_3BF4_41B6_BDC1A00DD810",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (4)",
 "id": "panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4",
 "overlays": [
  "this.overlay_9E51A68D_887B_33EB_41D1_29674DE07132",
  "this.overlay_9E24B4BD_8879_772A_41D2_A6BD1823DB12",
  "this.overlay_9E2B1CD7_8867_1766_41D5_1755AD2EEC2D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8401EF6D_8819_112B_41CA_4E8E5840228F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84058082_8819_0FDE_41AD_F27316848255"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EDB3B77C_FF6C_1734_41E8_66F54D106DE7",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDB3A77C_FF6C_1734_41E4_4B414419B3F3",
 "initialSequence": "this.sequence_EDB3B77C_FF6C_1734_41E8_66F54D106DE7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -60.98,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED050FDE_FF6C_3774_41DB_39BCD8D2C205",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED057FDE_FF6C_3774_41D6_57BFD8F46023",
 "initialSequence": "this.sequence_ED050FDE_FF6C_3774_41DB_39BCD8D2C205",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -120.49,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFBF7D75_FF6C_3B34_41C3_E699666A79B4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFBF4D75_FF6C_3B34_41DD_C7E88818682B",
 "initialSequence": "this.sequence_EFBF7D75_FF6C_3B34_41C3_E699666A79B4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_8430DB27_8819_1127_41D1_76C0382FB641_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE6BF3CE_FF6C_0F55_41DD_F5A9D900C8B9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE6813CE_FF6C_0F55_41BB_FDC0FC800D4B",
 "initialSequence": "this.sequence_EE6BF3CE_FF6C_0F55_41DD_F5A9D900C8B9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE53FDE9_FF6C_3B5C_41CE_86AC716C7BB2",
 "timeToIdle": 5000,
 "manualRotationSpeed": 576,
 "id": "camera_EE53DDE9_FF6C_3B5C_41DD_3618B75E6F53",
 "initialSequence": "this.sequence_EE53FDE9_FF6C_3B5C_41CE_86AC716C7BB2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 15.43,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE599DD9_FF6C_3B7C_41E6_B00C37168DAA",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE59CDD9_FF6C_3B7C_41EE_4B8F6F0312BC",
 "initialSequence": "this.sequence_EE599DD9_FF6C_3B7C_41E6_B00C37168DAA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECFAA201_FF6C_08CF_41EF_61ADD3242A01",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECFAC201_FF6C_08CF_41EE_0B4E93AD71FB",
 "initialSequence": "this.sequence_ECFAA201_FF6C_08CF_41EF_61ADD3242A01",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (6)",
 "id": "panorama_84097F44_8819_1159_41AC_A24AD754426D",
 "overlays": [
  "this.overlay_9208AA39_881B_132A_41D2_1DD6C2B6AFD1",
  "this.overlay_930E6128_8819_7129_41E0_A97848D55DBB",
  "this.overlay_91FBBD37_8818_F127_41C9_E6E7B97835D9",
  "this.overlay_943BD4E5_882F_F75B_41D4_711B10392468",
  "this.overlay_945A8F53_8829_717E_41D7_26ADC288AE9F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F09F55_8819_117A_41C8_5EE5232FB520"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE1D8446_FF6C_0954_41D3_08058147AD39",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE1DB446_FF6C_0954_41ED_CF908A568A9D",
 "initialSequence": "this.sequence_EE1D8446_FF6C_0954_41D3_08058147AD39",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_840A1492_881F_37FE_41E0_470C2F837010_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EB6FA267_FF6C_0953_41EB_85AB607B3F5B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EB6FF267_FF6C_0953_41EA_D6D6E3CD9B8F",
 "initialSequence": "this.sequence_EB6FA267_FF6C_0953_41EB_85AB607B3F5B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE092427_FF6C_08D4_41EF_D7CDA22154CE",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE094427_FF6C_08D4_41E4_35835795EBBD",
 "initialSequence": "this.sequence_EE092427_FF6C_08D4_41EF_D7CDA22154CE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -11.02,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE4CADA4_FF6C_3BD4_41E7_6FD9138F3974",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE4CBDA4_FF6C_3BD4_41E0_F3D0CC144F02",
 "initialSequence": "this.sequence_EE4CADA4_FF6C_3BD4_41E7_6FD9138F3974",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 124.16,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Narayan Math (3)",
 "id": "panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D",
 "overlays": [
  "this.overlay_C612DD6E_882B_1126_41CC_A9BE76A32CBE",
  "this.overlay_84BC281A_8BAF_C774_41DD_71D6FD4E9BA4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8430DB27_8819_1127_41D1_76C0382FB641"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_t.jpg",
 "hfovMax": 148
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EB4E0249_FF6C_095C_41D8_C60CF8D81F00",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EB4E2249_FF6C_095C_41E1_C8477FEA9AF8",
 "initialSequence": "this.sequence_EB4E0249_FF6C_095C_41D8_C60CF8D81F00",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.31,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE817578_FF6C_0B3C_41BD_EBB353E7FC42",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE816578_FF6C_0B3C_41DF_8E7B3843F9D9",
 "initialSequence": "this.sequence_EE817578_FF6C_0B3C_41BD_EBB353E7FC42",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -25.71,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "class": "PanoramaCamera"
},
{
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "media": "this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6_camera"
  },
  {
   "media": "this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52_camera"
  },
  {
   "media": "this.panorama_84080A39_8819_332A_41D4_E05441E9BF55",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_84080A39_8819_332A_41D4_E05441E9BF55_camera"
  },
  {
   "media": "this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_camera"
  },
  {
   "media": "this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_camera"
  },
  {
   "media": "this.panorama_84097F44_8819_1159_41AC_A24AD754426D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_84097F44_8819_1159_41AC_A24AD754426D_camera"
  },
  {
   "media": "this.panorama_84058082_8819_0FDE_41AD_F27316848255",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_84058082_8819_0FDE_41AD_F27316848255_camera"
  },
  {
   "media": "this.panorama_83F09F55_8819_117A_41C8_5EE5232FB520",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_83F09F55_8819_117A_41C8_5EE5232FB520_camera"
  },
  {
   "media": "this.panorama_83F43DA9_8819_712B_41B4_52595D130F77",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_83F43DA9_8819_712B_41B4_52595D130F77_camera"
  },
  {
   "media": "this.panorama_8401EF6D_8819_112B_41CA_4E8E5840228F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_camera"
  },
  {
   "media": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686_camera"
  },
  {
   "media": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_camera"
  },
  {
   "media": "this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_camera"
  },
  {
   "media": "this.panorama_840A1492_881F_37FE_41E0_470C2F837010",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_840A1492_881F_37FE_41E0_470C2F837010_camera"
  },
  {
   "media": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_camera"
  },
  {
   "media": "this.panorama_8417C642_881F_7359_41D3_634DA2A8F5BF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_camera"
  },
  {
   "media": "this.panorama_8406D831_881F_1F3B_41C0_438B574CC920",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8406D831_881F_1F3B_41C0_438B574CC920_camera"
  },
  {
   "media": "this.panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_camera"
  },
  {
   "media": "this.panorama_8430CEEA_881F_3329_41B1_241573C33BA1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8430CEEA_881F_3329_41B1_241573C33BA1_camera"
  },
  {
   "media": "this.panorama_842D5078_881F_0F29_41D0_E002DB468D4B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_842D5078_881F_0F29_41D0_E002DB468D4B_camera"
  },
  {
   "media": "this.panorama_8436733A_8819_112E_41D3_781CB6DC8810",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8436733A_8819_112E_41D3_781CB6DC8810_camera"
  },
  {
   "media": "this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_camera"
  },
  {
   "media": "this.panorama_840627F6_8819_1126_41D8_593CAA163830",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_840627F6_8819_1126_41D8_593CAA163830_camera"
  },
  {
   "media": "this.panorama_8623B92F_8819_F127_4193_EB189FF61F98",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8623B92F_8819_F127_4193_EB189FF61F98_camera"
  },
  {
   "media": "this.panorama_8430DB27_8819_1127_41D1_76C0382FB641",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8430DB27_8819_1127_41D1_76C0382FB641_camera"
  },
  {
   "media": "this.panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_camera"
  },
  {
   "media": "this.panorama_836A903D_8819_0F2A_41D0_0B24250C7C06",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_camera"
  },
  {
   "media": "this.panorama_824A89C7_8819_1166_41D8_608468B8A43B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_824A89C7_8819_1166_41D8_608468B8A43B_camera"
  },
  {
   "media": "this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_camera"
  },
  {
   "media": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_camera"
  },
  {
   "media": "this.panorama_82635422_8818_F6D9_41D8_128C70754614",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82635422_8818_F6D9_41D8_128C70754614_camera"
  },
  {
   "media": "this.panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_camera"
  },
  {
   "media": "this.panorama_82623EF2_881B_133E_41D7_F5E60A69931B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_82623EF2_881B_133E_41D7_F5E60A69931B_camera"
  },
  {
   "media": "this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_camera"
  },
  {
   "media": "this.panorama_826A6B02_881B_12DE_41CA_89AC113E404C",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_826A6B02_881B_12DE_41CA_89AC113E404C_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "idleSequence": "this.sequence_EEB565AD_FF6C_0BD4_41ED_FE07D8168CDB",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEB5B5AD_FF6C_0BD4_41D6_ECBF7216286E",
 "initialSequence": "this.sequence_EEB565AD_FF6C_0BD4_41ED_FE07D8168CDB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEDE94F3_FF6C_094C_41E6_38B579ED81AD",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEDEA4F3_FF6C_094C_41E9_35CAC4F172A5",
 "initialSequence": "this.sequence_EEDE94F3_FF6C_094C_41E6_38B579ED81AD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Puraditya Math (4)",
 "id": "panorama_8436733A_8819_112E_41D3_781CB6DC8810",
 "overlays": [
  "this.overlay_C238CF3E_8829_F126_41CE_948F7A3E3684",
  "this.overlay_C32B2C12_8827_16FE_41B5_11D609EF3D64",
  "this.overlay_C5495DD6_8839_1179_41C9_B19913C20418"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_842D5078_881F_0F29_41D0_E002DB468D4B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840627F6_8819_1126_41D8_593CAA163830"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EEA735AD_FF6C_0BD4_41E6_4E72F61F7B52",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEA725AD_FF6C_0BD4_41D8_52CC349F234B",
 "initialSequence": "this.sequence_EEA735AD_FF6C_0BD4_41E6_4E72F61F7B52",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC432153_FF6C_0B4C_41E2_82E2CC8F0F2A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC436144_FF6C_0B5B_41D2_5D5D420A38E4",
 "initialSequence": "this.sequence_EC432153_FF6C_0B4C_41E2_82E2CC8F0F2A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 6.61
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDA3775D_FF6C_1774_41E7_CA84F0F18B7B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDA3975D_FF6C_1774_41DD_15ACD5E12028",
 "initialSequence": "this.sequence_EDA3775D_FF6C_1774_41E7_CA84F0F18B7B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -76.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDFEB6D9_FF6C_097F_41DE_232BCBC16D76",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDFED6D9_FF6C_097F_41ED_216E2C829F3D",
 "initialSequence": "this.sequence_EDFEB6D9_FF6C_097F_41DE_232BCBC16D76",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -72.73,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF9A7310_FF6C_08CC_41CA_6CB8897A2815",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF9A9310_FF6C_08CC_41E6_59389AA46113",
 "initialSequence": "this.sequence_EF9A7310_FF6C_08CC_41CA_6CB8897A2815",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE171455_FF6C_0977_41DB_ED8E19566289",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE170455_FF6C_0977_41E3_3F729C259645",
 "initialSequence": "this.sequence_EE171455_FF6C_0977_41DB_ED8E19566289",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -30.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (13)",
 "id": "panorama_84393379_881F_112B_41DF_BCE0E7FB9E56",
 "overlays": [
  "this.overlay_A0C4180F_88E7_7EE6_41B3_A7C216586B42",
  "this.overlay_A05FFC1F_88E7_36E7_41D7_91062F12A0B2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840A1492_881F_37FE_41E0_470C2F837010"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_826A6B02_881B_12DE_41CA_89AC113E404C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_8623B92F_8819_F127_4193_EB189FF61F98_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EED00509_FF6C_08DF_41E6_D214852B3F94",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EED03509_FF6C_08DF_41E5_CF5A042C7C9F",
 "initialSequence": "this.sequence_EED00509_FF6C_08DF_41E6_D214852B3F94",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC60D172_FF6C_0B4D_41EC_F3F39A420BF4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC60F172_FF6C_0B4D_41D4_3B380B3C4DF2",
 "initialSequence": "this.sequence_EC60D172_FF6C_0B4D_41EC_F3F39A420BF4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED6E15F7_FF6C_0B34_41DE_9ECC3C604A52",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED6E05F7_FF6C_0B34_41E3_63CA840A2D41",
 "initialSequence": "this.sequence_ED6E15F7_FF6C_0B34_41DE_9ECC3C604A52",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 141.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED10F65F_FF6C_0973_41D1_07B1ED772832",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED11165F_FF6C_0973_41EC_87E443547EB8",
 "initialSequence": "this.sequence_ED10F65F_FF6C_0973_41D1_07B1ED772832",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDCA66AA_FF6C_09DD_41D7_B5D87EF34116",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDCA96AA_FF6C_09DD_41E6_6FB9B6E664E2",
 "initialSequence": "this.sequence_EDCA66AA_FF6C_09DD_41D7_B5D87EF34116",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.31,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC8AA214_FF6C_08F4_41EC_34FE4AC2BC1C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC8AC214_FF6C_08F4_41B3_1245B4F5369A",
 "initialSequence": "this.sequence_EC8AA214_FF6C_08F4_41EC_34FE4AC2BC1C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEE5DEB3_FF6C_3933_41D1_D19AE751CFDF",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEEA0EB3_FF6C_3933_41EC_A17A3FB6AE1A",
 "initialSequence": "this.sequence_EEE5DEB3_FF6C_3933_41D1_D19AE751CFDF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_84010084_8819_0FD9_41E0_C15DD5732686_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_824A89C7_8819_1166_41D8_608468B8A43B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE2B0480_FF6C_09CC_41EA_733ABF863B6F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE2B2480_FF6C_09CC_41EF_7C7E28A5E6EB",
 "initialSequence": "this.sequence_EE2B0480_FF6C_09CC_41EA_733ABF863B6F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Puraditya Math (5)",
 "id": "panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C",
 "overlays": [
  "this.overlay_CFACADDD_8819_F16B_41BF_F07548FB1DCC",
  "this.overlay_C0FFD6D3_8827_137E_41CA_71A2617E60D2",
  "this.overlay_C04D2D25_8829_16DB_41C1_43B10B476A8D",
  "this.overlay_AE8EC944_A06A_0B38_41C8_E326CB05FD42"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_842D5078_881F_0F29_41D0_E002DB468D4B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8430CEEA_881F_3329_41B1_241573C33BA1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840627F6_8819_1126_41D8_593CAA163830"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8436733A_8819_112E_41D3_781CB6DC8810"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_ED0D9630_FF6C_08CD_41DF_5332ABC39883",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED0DB630_FF6C_08CD_41C7_442E905EA1F5",
 "initialSequence": "this.sequence_ED0D9630_FF6C_08CD_41DF_5332ABC39883",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -146.2,
  "class": "PanoramaCameraPosition",
  "pitch": -8.82
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (11)",
 "id": "panorama_84010084_8819_0FD9_41E0_C15DD5732686",
 "overlays": [
  "this.overlay_AB0ACCEE_88F9_1729_41BD_ADDBB864CB03",
  "this.overlay_AC873D74_88F9_3139_41C9_42C41EA69414",
  "this.overlay_ADFC0C7E_88FF_1726_41C9_AB0C98FE42E4",
  "this.overlay_AB0F54EF_88FF_1727_419F_FEBCD40FA223",
  "this.overlay_AC71042B_88FF_772F_41D9_75218157A9BB",
  "this.overlay_AB038773_88F8_F13F_41D3_FD132A2B7D66"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8401EF6D_8819_112B_41CA_4E8E5840228F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F09F55_8819_117A_41C8_5EE5232FB520"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (10)",
 "id": "panorama_8401EF6D_8819_112B_41CA_4E8E5840228F",
 "overlays": [
  "this.overlay_AAD46C15_88E7_16FA_41A3_7853F3E14102",
  "this.overlay_ABA98B76_88E7_1126_41E0_6D8FC0A55461",
  "this.overlay_A9431D6E_88F9_7129_41D3_81838C6DA3F2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84058082_8819_0FDE_41AD_F27316848255"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFAE633C_FF6C_0F35_41C5_0533FF3480DD",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFAE933C_FF6C_0F35_41E3_322C910A5810",
 "initialSequence": "this.sequence_EFAE633C_FF6C_0F35_41C5_0533FF3480DD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE793E1E_FF6C_38F4_41C4_323D091D0EC1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE790E1E_FF6C_38F4_41EC_B29D1367CDA2",
 "initialSequence": "this.sequence_EE793E1E_FF6C_38F4_41C4_323D091D0EC1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -55.1,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC27C1BA_FF6C_0B3C_41BF_CE87C424506C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC27E1BA_FF6C_0B3C_41DF_79697E1351AF",
 "initialSequence": "this.sequence_EC27C1BA_FF6C_0B3C_41BF_CE87C424506C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (9)",
 "hfovMin": "135%",
 "id": "panorama_826A6B02_881B_12DE_41CA_89AC113E404C",
 "overlays": [
  "this.overlay_CADF30A0_8869_0FD9_41C2_0DC1C9C5D20E",
  "this.overlay_CA485B47_8869_1167_41DB_39BB62A9611B",
  "this.overlay_DAE30BB7_8819_3127_4178_C76D058AF04E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82623EF2_881B_133E_41D7_F5E60A69931B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Puraditya Math (3)",
 "id": "panorama_842D5078_881F_0F29_41D0_E002DB468D4B",
 "overlays": [
  "this.overlay_C33C5731_8839_113B_41D7_4047AB439987",
  "this.overlay_C31DF368_883B_112A_41BC_10E88A567ACD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8436733A_8819_112E_41D3_781CB6DC8810"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_ED5945DC_FF6C_0B74_41EF_9110B8F0C9F6",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED5975DC_FF6C_0B74_4197_00F0FD021656",
 "initialSequence": "this.sequence_ED5945DC_FF6C_0B74_41EF_9110B8F0C9F6",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -24.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC2A2857_FF6C_1973_41CE_A74221A26280",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC2A4857_FF6C_1973_41D7_929D38F79E3A",
 "initialSequence": "this.sequence_EC2A2857_FF6C_1973_41CE_A74221A26280",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_84058082_8819_0FDE_41AD_F27316848255_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED277675_FF6C_0937_41E4_E72F8E7773F5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED279675_FF6C_0937_41E0_0EB970A2BBF2",
 "initialSequence": "this.sequence_ED277675_FF6C_0937_41E4_E72F8E7773F5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC5177B1_FF6C_17CF_41BB_454F9DBD1263",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC5197B1_FF6C_17CF_41B1_5F441A1F8A81",
 "initialSequence": "this.sequence_EC5177B1_FF6C_17CF_41BB_454F9DBD1263",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 66.12,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED414F5A_FF6C_377C_41EA_E067229157CC",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED415F5A_FF6C_377C_41DA_20B5779C9CFA",
 "initialSequence": "this.sequence_ED414F5A_FF6C_377C_41EA_E067229157CC",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 136.65,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC1641B0_FF6C_0BCC_41E1_D345CE4536B3",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC1691AE_FF6C_0BD2_41E0_11A86396D02B",
 "initialSequence": "this.sequence_EC1641B0_FF6C_0BCC_41E1_D345CE4536B3",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED3B3042_FF6C_094C_41E0_3DDCBEC5AD45",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED3B4042_FF6C_094C_41E2_37915700A34B",
 "initialSequence": "this.sequence_ED3B3042_FF6C_094C_41E0_3DDCBEC5AD45",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 136.65,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC89B8CA_FF6C_195C_41E1_2302CCE77795",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC89A8CA_FF6C_195C_41E3_5D515E502910",
 "initialSequence": "this.sequence_EC89B8CA_FF6C_195C_41E1_2302CCE77795",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDA2011A_FF6C_08FC_41E5_1AA4C8F58DE1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDA2211A_FF6C_08FC_41BC_62F27EA9C00D",
 "initialSequence": "this.sequence_EDA2011A_FF6C_08FC_41E5_1AA4C8F58DE1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -45.55,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_82623EF2_881B_133E_41D7_F5E60A69931B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE5323B7_FF6C_0F34_41E7_C06D3D69C4ED",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE5343B7_FF6C_0F34_41EA_43B7074ACFE3",
 "initialSequence": "this.sequence_EE5323B7_FF6C_0F34_41E7_C06D3D69C4ED",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 576,
 "id": "panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF9E32FD_FF6C_0937_41DA_93FBE9A68085",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF9E22FD_FF6C_0937_41E3_AAB4D89E4F12",
 "initialSequence": "this.sequence_EF9E32FD_FF6C_0937_41DA_93FBE9A68085",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 85.22,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDE8A0A6_FF6C_09D4_41A6_9FECC8628058",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDE8C0A6_FF6C_09D4_41E9_DD98D6A29BBB",
 "initialSequence": "this.sequence_EDE8A0A6_FF6C_09D4_41A6_9FECC8628058",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 6.61
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_84080A39_8819_332A_41D4_E05441E9BF55_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFB52370_FF6C_0F4C_41E8_9F73E3C775DB",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFB54370_FF6C_0F4C_41DF_10378344B8D4",
 "initialSequence": "this.sequence_EFB52370_FF6C_0F4C_41E8_9F73E3C775DB",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC4DC13D_FF6C_0B34_41D8_FC55C54693D4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDB2113D_FF6C_0B34_41E1_7C2A0907E27B",
 "initialSequence": "this.sequence_EC4DC13D_FF6C_0B34_41D8_FC55C54693D4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 63.18,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EB02E2A2_FF6C_09CC_41ED_E5A42AC47B6D",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EB0302A2_FF6C_09CC_41EE_C38BBD5558DD",
 "initialSequence": "this.sequence_EB02E2A2_FF6C_09CC_41ED_E5A42AC47B6D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC04C81A_FF6C_18FD_41D3_7E846C37DAE3",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC04F81A_FF6C_18FD_41DD_6CA3D0EB5A2A",
 "initialSequence": "this.sequence_EC04C81A_FF6C_18FD_41D3_7E846C37DAE3",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EB7D527C_FF6C_0934_41EF_11C8283C86B9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EB7D427C_FF6C_0934_41D8_70B45D2F2D61",
 "initialSequence": "this.sequence_EB7D527C_FF6C_0934_41EF_11C8283C86B9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -116.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFB27382_FF6C_0FCD_41E8_7379AE3BE190",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFB28382_FF6C_0FCD_41D7_CD296A8767DA",
 "initialSequence": "this.sequence_EFB27382_FF6C_0FCD_41E8_7379AE3BE190",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC70A192_FF6C_0BCC_41EB_C2A73BBC7C18",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC70C192_FF6C_0BCC_41E3_B24B128A5854",
 "initialSequence": "this.sequence_EC70A192_FF6C_0BCC_41EB_C2A73BBC7C18",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -77.14,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE899EE6_FF6C_3955_41CE_57A7CAE57883",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE89FEE6_FF6C_3955_41B0_342F4EDDA1F2",
 "initialSequence": "this.sequence_EE899EE6_FF6C_3955_41CE_57A7CAE57883",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 45.55,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC41679B_FF6C_17F3_41E9_91884E78DC93",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC41979B_FF6C_17F3_41D2_E4AC10C03B2F",
 "initialSequence": "this.sequence_EC41679B_FF6C_17F3_41E9_91884E78DC93",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 36,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED03B640_FF6C_094C_41D5_1FE3011F1084",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED03F640_FF6C_094C_41CD_3FDFF20F80FA",
 "initialSequence": "this.sequence_ED03B640_FF6C_094C_41D5_1FE3011F1084",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 33.06,
  "class": "PanoramaCameraPosition",
  "pitch": 2.94
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDFE60C5_FF6C_0957_41EC_0B8BC6B2D851",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDFE90C5_FF6C_0957_41D7_99CC7455E1CF",
 "initialSequence": "this.sequence_EDFE60C5_FF6C_0957_41EC_0B8BC6B2D851",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (3)",
 "id": "panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87",
 "overlays": [
  "this.overlay_BD78F2BE_8827_3329_41BC_9BC35E4ABFB0",
  "this.overlay_BE8BFAE5_8827_F35B_4191_AA391A9BEC94",
  "this.overlay_BEB2CCEC_8819_172A_41D9_E8D917C57ECF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82635422_8818_F6D9_41D8_128C70754614"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EFA13D65_FF6C_3B57_41DC_10567F19FC2F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFA11D65_FF6C_3B57_41D5_9F9F69BEB4F5",
 "initialSequence": "this.sequence_EFA13D65_FF6C_3B57_41DC_10567F19FC2F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EF92B332_FF6C_08CD_41E6_53EAD02303DF",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EF92A332_FF6C_08CD_41E5_DFAB60FFB4A2",
 "initialSequence": "this.sequence_EF92B332_FF6C_08CD_41E6_53EAD02303DF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDCB0071_FF6C_094C_41E1_FCE94BE9DB79",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDCB2071_FF6C_094C_41DF_6DEB1EC520E5",
 "initialSequence": "this.sequence_EDCB0071_FF6C_094C_41E1_FCE94BE9DB79",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_83F43DA9_8819_712B_41B4_52595D130F77_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECC781D9_FF6C_0B7C_41ED_839A0F947EEF",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECC7B1D9_FF6C_0B7C_41EB_0973AA8BE753",
 "initialSequence": "this.sequence_ECC781D9_FF6C_0B7C_41ED_839A0F947EEF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.73,
  "class": "PanoramaCameraPosition",
  "pitch": 4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED7C6611_FF6C_08CF_41D9_8FB609AD4358",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED7C9611_FF6C_08CF_41AC_E943ECF3A458",
 "initialSequence": "this.sequence_ED7C6611_FF6C_08CF_41D9_8FB609AD4358",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -7.35,
  "class": "PanoramaCameraPosition",
  "pitch": -2.94
 },
 "class": "PanoramaCamera"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "children": [
  {
   "label": "Outter part (1)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Outter part (2)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Outter part (3)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Outter part (4)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Outter part (5)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Outter part (6)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Outter part (7)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Outter part (8)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Outter part (9)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "Outter part (10)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "Outter part (11)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "Outter part (12)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "Outter part (13)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "Outter part (14)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "Outter part (15)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "Outter part (16)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "Outter part (17)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "Puraditya Math (1)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "Puraditya Math (2)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "Puraditya Math (3)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "Puraditya Math (4)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "Puraditya Math (5)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "label": "Puraditya Math (6)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "label": "Narayan Math (1)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "label": "Narayan Math (2)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "label": "Narayan Math (3)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "label": "Inner Part (1)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "label": "Inner Part (2)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "label": "Inner Part (3)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  },
  {
   "label": "Inner Part (4)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  },
  {
   "label": "Inner Part (5)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  },
  {
   "label": "Inner Part (6)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  },
  {
   "label": "Inner Part (7)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  },
  {
   "label": "Inner Part (8)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  },
  {
   "label": "Inner Part (9)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "label": "Media",
 "id": "Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "idleSequence": "this.sequence_ECA8422A_FF6C_08DD_41ED_8AC4CFEDFEF0",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECA8922A_FF6C_08DD_41ED_A65FBFD52F21",
 "initialSequence": "this.sequence_ECA8422A_FF6C_08DD_41ED_8AC4CFEDFEF0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (16)",
 "id": "panorama_8417C642_881F_7359_41D3_634DA2A8F5BF",
 "overlays": [
  "this.overlay_A686DAB6_8828_F326_41D4_CB5403E53EF3",
  "this.overlay_A61E7327_8829_7127_419A_21F61A098A16",
  "this.overlay_B8A32D66_8829_F159_41DA_47CC1E73CAD3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84058082_8819_0FDE_41AD_F27316848255"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8406D831_881F_1F3B_41C0_438B574CC920"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (3)",
 "id": "panorama_84080A39_8819_332A_41D4_E05441E9BF55",
 "overlays": [
  "this.overlay_9CA441AD_8867_112A_41E0_374C0784A178",
  "this.overlay_9D1939C5_8867_315B_41DA_43FF65B425BB",
  "this.overlay_9D6BA728_8867_7129_41D7_C8161EF51665"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840A1492_881F_37FE_41E0_470C2F837010"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EC15183B_FF6C_193C_41C7_56CE256F642A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC15283B_FF6C_193C_41E5_38CD34B05CF1",
 "initialSequence": "this.sequence_EC15183B_FF6C_193C_41C7_56CE256F642A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -79.35,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (7)",
 "id": "panorama_84058082_8819_0FDE_41AD_F27316848255",
 "overlays": [
  "this.overlay_94D2CBEB_8819_112F_41D5_7AFC06C47E04",
  "this.overlay_9570E3DA_8819_116E_41C8_CBBFA4FCB29B",
  "this.overlay_94E8CFF5_8819_313B_41C3_520B69829B4D",
  "this.overlay_9510AB6E_8819_7129_41D4_4F1961233B45",
  "this.overlay_B609585D_887F_1F6B_41D2_7BF49E0C147B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8401EF6D_8819_112B_41CA_4E8E5840228F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8406D831_881F_1F3B_41C0_438B574CC920"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE125E5D_FF6C_3974_41D8_32F6383647E4",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE128E5D_FF6C_3974_41A4_FCD591134CCF",
 "initialSequence": "this.sequence_EE125E5D_FF6C_3974_41D8_32F6383647E4",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE62C3E9_FF6C_0F5C_41EF_D1E16A25853F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE62E3E9_FF6C_0F5C_41EE_43A79B535AE7",
 "initialSequence": "this.sequence_EE62C3E9_FF6C_0F5C_41EF_D1E16A25853F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE47DDC9_FF6C_3B5F_41DE_938EDEAC1C51",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE443DC9_FF6C_3B5F_41E8_3623EE24F46F",
 "initialSequence": "this.sequence_EE47DDC9_FF6C_3B5F_41DE_938EDEAC1C51",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.69,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED771FBE_FF6C_3735_41DC_44BF4076012A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED775FBE_FF6C_3735_41D5_C59AEA306F81",
 "initialSequence": "this.sequence_ED771FBE_FF6C_3735_41DC_44BF4076012A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 64.65,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFA3E35A_FF6C_0F7C_41CB_93660684E6C1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFA0035A_FF6C_0F7C_41E6_BC9A134146C4",
 "initialSequence": "this.sequence_EFA3E35A_FF6C_0F7C_41CB_93660684E6C1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.41,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECCBF880_FF6C_19CC_41D4_3D0CEBAADB5A",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECCBE880_FF6C_19CC_41EF_94BE7355422F",
 "initialSequence": "this.sequence_ECCBF880_FF6C_19CC_41D4_3D0CEBAADB5A",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 6.61
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EDAC70FB_FF6C_093C_419B_7E2961D37811",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EDAC80FB_FF6C_093C_41B3_68DA87E8E27C",
 "initialSequence": "this.sequence_EDAC70FB_FF6C_093C_419B_7E2961D37811",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.69,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEF8BEC3_FF6C_394C_41D4_1AD2A297657B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEF88EC3_FF6C_394C_41D1_44694C4F6BD4",
 "initialSequence": "this.sequence_EEF8BEC3_FF6C_394C_41D4_1AD2A297657B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.31,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECF998B5_FF6C_1934_41EE_E9A2415D914C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECF9A8B5_FF6C_1934_4172_780A841A8C4D",
 "initialSequence": "this.sequence_ECF998B5_FF6C_1934_41EE_E9A2415D914C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Narayan Math (1)",
 "id": "panorama_8623B92F_8819_F127_4193_EB189FF61F98",
 "overlays": [
  "this.overlay_D88D42FE_882B_1329_41D7_59772385589C",
  "this.overlay_D96E74B6_8829_3726_4197_3A89192F7E34"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8430DB27_8819_1127_41D1_76C0382FB641"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EB5F625D_FF6C_0977_41C8_10211DA69964",
 "timeToIdle": 5000,
 "manualRotationSpeed": 576,
 "id": "camera_EB5F925D_FF6C_0977_41B5_E2EFB8F738FA",
 "initialSequence": "this.sequence_EB5F625D_FF6C_0977_41C8_10211DA69964",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.37,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEA2FF25_FF6C_38D4_41BA_31317BD3080B",
 "timeToIdle": 5000,
 "manualRotationSpeed": 576,
 "id": "camera_EEA32F25_FF6C_38D4_41C5_ABA45D78C4CC",
 "initialSequence": "this.sequence_EEA2FF25_FF6C_38D4_41BA_31317BD3080B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 13.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECAF78F9_FF6C_193C_41D5_CFDD36C046C0",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECAF68F9_FF6C_193C_41ED_774C49EB32B9",
 "initialSequence": "this.sequence_ECAF78F9_FF6C_193C_41D5_CFDD36C046C0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -165.31,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEE43529_FF6C_08DC_41D6_9465ACC39529",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEE45529_FF6C_08DC_41C5_09B24F6D65A2",
 "initialSequence": "this.sequence_EEE43529_FF6C_08DC_41D6_9465ACC39529",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE212E6C_FF6C_3955_41EB_94C96722016F",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE213E6C_FF6C_3955_41DA_FF7C6200CEF8",
 "initialSequence": "this.sequence_EE212E6C_FF6C_3955_41EB_94C96722016F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -52.16,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE778407_FF6C_08D3_41C6_A5336900DE36",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE77B407_FF6C_08D3_41B4_7C7ABE135E0E",
 "initialSequence": "this.sequence_EE778407_FF6C_08D3_41C6_A5336900DE36",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 130.04,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EB42B938_FF6C_1B3C_41E8_65BA5553400C",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EB42D938_FF6C_1B3C_41AE_F6CF6BCCAC3E",
 "initialSequence": "this.sequence_EB42B938_FF6C_1B3C_41E8_65BA5553400C",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.63,
  "class": "PanoramaCameraPosition",
  "pitch": 1.47
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED671F99_FF6C_37FC_41CF_7D6962D48020",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED674F99_FF6C_37FC_41D4_C9135957FC50",
 "initialSequence": "this.sequence_ED671F99_FF6C_37FC_41CF_7D6962D48020",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 16.9,
  "class": "PanoramaCameraPosition",
  "pitch": 2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EEC45E82_FF6C_39CD_41C0_4A36133898B5",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEC4AE82_FF6C_39CD_41E9_7C56927B8B2C",
 "initialSequence": "this.sequence_EEC45E82_FF6C_39CD_41C0_4A36133898B5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -115.35,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (15)",
 "id": "panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA",
 "overlays": [
  "this.overlay_A3058754_8829_1179_41D6_90110901055A",
  "this.overlay_A4C29BB4_8829_1139_41AA_EA78F272F383",
  "this.overlay_A6B15BE0_8829_115A_41DC_DC5947BBA0AA",
  "this.overlay_A36B794E_882B_7169_41D2_891B36CAE900",
  "this.overlay_A5B9C3A4_882B_11DA_41B4_508D35B00DAE",
  "this.overlay_A364F79E_882B_11E9_41DE_5988408AE263",
  "this.overlay_B847FA8D_8839_13EA_41BE_1647135C645F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_836A903D_8819_0F2A_41D0_0B24250C7C06"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8406D831_881F_1F3B_41C0_438B574CC920"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8417C642_881F_7359_41D3_634DA2A8F5BF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840A1492_881F_37FE_41E0_470C2F837010"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84080A39_8819_332A_41D4_E05441E9BF55"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_t.jpg",
 "hfovMax": 130
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_83F09F55_8819_117A_41C8_5EE5232FB520_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (2)",
 "id": "panorama_824A89C7_8819_1166_41D8_608468B8A43B",
 "overlays": [
  "this.overlay_BB842F80_8829_31D9_41CB_EF31BFE1E93A",
  "this.overlay_BBAF891E_882F_3EE6_4195_32E16DB05EF7",
  "this.overlay_BB1E1A74_8829_333A_41BE_E0963839D228",
  "this.overlay_BD2857D1_882B_117A_41C2_CD942B3D5E17"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82635422_8818_F6D9_41D8_128C70754614"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EC37C1CE_FF6C_0B55_41C4_894550B95384",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC37E1CE_FF6C_0B55_41EA_B24B7CA74987",
 "initialSequence": "this.sequence_EC37C1CE_FF6C_0B55_41C4_894550B95384",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (1)",
 "id": "panorama_836A903D_8819_0F2A_41D0_0B24250C7C06",
 "overlays": [
  "this.overlay_B9EA58F9_8827_1F2A_41C4_5FD354134CE6",
  "this.overlay_B90B8E73_8827_333F_41DA_124ABB244C44",
  "this.overlay_B9C858DA_8827_3F6E_41DB_664BC0FEF67F",
  "this.overlay_D138D120_F9B0_89C9_41E9_4A88D0AD29FF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_824A89C7_8819_1166_41D8_608468B8A43B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_t.jpg",
 "hfovMax": 148
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (14)",
 "id": "panorama_840A1492_881F_37FE_41E0_470C2F837010",
 "overlays": [
  "this.overlay_A119C49D_881B_37EB_41C8_7FE4721DC68C",
  "this.overlay_A16E6980_8818_F1D9_41C4_80ACBBA69451",
  "this.overlay_A1344B17_8819_72E6_41C9_E25A875E2227",
  "this.overlay_A0715769_881F_312A_41AF_E83B97A9C314",
  "this.overlay_A3974E36_881B_3326_41D7_B36639A75A65"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84080A39_8819_332A_41D4_E05441E9BF55"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EE1DDE3D_FF6C_3937_41EB_2658C14CD091",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE022E3D_FF6C_3937_41E9_D070FEC7BBB9",
 "initialSequence": "this.sequence_EE1DDE3D_FF6C_3937_41EB_2658C14CD091",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -27.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Outter part (5)",
 "id": "panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6",
 "overlays": [
  "this.overlay_9536381C_8827_1EEA_418F_D4C3702416A7",
  "this.overlay_9536181C_8827_1EEA_41D7_B5C5C14C0B14",
  "this.overlay_9536681C_8827_1EEA_41D6_2E0F4C6FF2AF",
  "this.overlay_9536781C_8827_1EEA_41D7_AACE99C4F779",
  "this.overlay_9536A81C_8827_1EEA_41D2_5B14FBFBA6C3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84097F44_8819_1159_41AC_A24AD754426D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84010084_8819_0FD9_41E0_C15DD5732686"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83F43DA9_8819_712B_41B4_52595D130F77"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EED50EA2_FF6C_39CC_41D2_A6FE6B0683AE",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EED56EA2_FF6C_39CC_41E2_75B44231852E",
 "initialSequence": "this.sequence_EED50EA2_FF6C_39CC_41D2_A6FE6B0683AE",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 132,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC0621A1_FF6C_0BCF_41B6_61D22CB44437",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC0641A1_FF6C_0BCF_41EB_0FA8D6E0CA89",
 "initialSequence": "this.sequence_EC0621A1_FF6C_0BCF_41B6_61D22CB44437",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -110.94,
  "class": "PanoramaCameraPosition",
  "pitch": -15.43
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EC3A986C_FF6C_1954_41E3_9F5AD5B40EF2",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EC3AB86C_FF6C_1954_41D8_A4C3C0D4D717",
 "initialSequence": "this.sequence_EC3A986C_FF6C_1954_41E3_9F5AD5B40EF2",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECE551F7_FF6C_0B34_41E4_F7BBBFDA100E",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECE541F7_FF6C_0B34_41EA_F9BA7BB8241C",
 "initialSequence": "this.sequence_ECE551F7_FF6C_0B34_41E4_F7BBBFDA100E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE30A4B4_FF6C_0935_41E6_413AC037C08D",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE30F4B4_FF6C_0935_41EE_1EBB49A0FB52",
 "initialSequence": "this.sequence_EE30A4B4_FF6C_0935_41E6_413AC037C08D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED517F79_FF6C_373F_41BF_21E226F74461",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED51AF79_FF6C_373F_41EC_3F164185A4B2",
 "initialSequence": "this.sequence_ED517F79_FF6C_373F_41BF_21E226F74461",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -118.29,
  "class": "PanoramaCameraPosition",
  "pitch": 10.29
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (8)",
 "id": "panorama_826FACC5_881B_375A_41E0_AE3598C2DC96",
 "overlays": [
  "this.overlay_C8A0E6C2_8879_735E_41A4_FF3C1193BAD7",
  "this.overlay_C81EE320_8879_32DA_41D6_93D69C0B9C95",
  "this.overlay_C9D4A7E3_8879_115E_41DD_50A1C45DED04",
  "this.overlay_D91EC0D8_881F_0F69_41C6_8C9928031612"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826A6B02_881B_12DE_41CA_89AC113E404C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82623EF2_881B_133E_41D7_F5E60A69931B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_ED2B1023_FF6C_08CC_41DD_9D21ADB0A0E1",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED2B3023_FF6C_08CC_41CC_C069FF06DE56",
 "initialSequence": "this.sequence_ED2B1023_FF6C_08CC_41DD_9D21ADB0A0E1",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -51.43,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ED4A85CC_FF6C_0B55_41EA_D97C757AAFCD",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ED4AB5CC_FF6C_0B55_41D6_18FE223C86D3",
 "initialSequence": "this.sequence_ED4A85CC_FF6C_0B55_41EA_D97C757AAFCD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.8,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EFB9C366_FF6C_0F54_41E9_325FFE6AC7D9",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EFB9E366_FF6C_0F54_41DB_974844B0B725",
 "initialSequence": "this.sequence_EFB9C366_FF6C_0F54_41E9_325FFE6AC7D9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE31DE7C_FF6C_3934_41EF_A46B6B9F4834",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE361E7C_FF6C_3934_41ED_217EC777A7DE",
 "initialSequence": "this.sequence_EE31DE7C_FF6C_3934_41EF_A46B6B9F4834",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_EE0F4E3D_FF6C_3937_41C8_FECA090DD4B8",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EE0FBE3D_FF6C_3937_41DE_2863312329D6",
 "initialSequence": "this.sequence_EE0F4E3D_FF6C_3937_41C8_FECA090DD4B8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 62.45,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Inner Part (6)",
 "hfovMin": "135%",
 "id": "panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4",
 "overlays": [
  "this.overlay_B6E6EB59_887B_316A_41D9_62BDB1AC380C",
  "this.overlay_B69C5294_8879_73FA_418A_5BA2739B3AF3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_84058082_8819_0FDE_41AD_F27316848255"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_EF9E5D30_FF6C_38CC_41EC_AFB6DEF239E1",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_t.jpg",
 "hfovMax": 130
},
{
 "idleSequence": "this.sequence_EEAC9F15_FF6C_38F4_4165_8F2938394644",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_EEACFF15_FF6C_38F4_41EB_B55F0CA14C0B",
 "initialSequence": "this.sequence_EEAC9F15_FF6C_38F4_4165_8F2938394644",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -46.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECE9489E_FF6C_19F5_41E7_C4DAC0C9D7B3",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECE9789E_FF6C_19F5_41EF_47B10393853A",
 "initialSequence": "this.sequence_ECE9489E_FF6C_19F5_41E7_C4DAC0C9D7B3",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.8,
  "class": "PanoramaCameraPosition",
  "pitch": -1.47
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_9651EF51_8839_117B_41C6_84DBEA210F52_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "panorama_842D5078_881F_0F29_41D0_E002DB468D4B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 2.66
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 2.66
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera"
},
{
 "idleSequence": "this.sequence_ECBD3905_FF6C_18D7_41ED_4B8ECFF471FF",
 "timeToIdle": 5000,
 "manualRotationSpeed": 600,
 "id": "camera_ECBD2905_FF6C_18D7_41AA_2505F5255D6A",
 "initialSequence": "this.sequence_ECBD3905_FF6C_18D7_41ED_4B8ECFF471FF",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -142.53,
  "class": "PanoramaCameraPosition",
  "pitch": 5.14
 },
 "class": "PanoramaCamera"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF0000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_AED86E5D_A06A_09C8_4180_B10C03552EFB",
 "width": 52.45,
 "right": "1.07%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "2.2%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 55.6,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_AED86E5D_A06A_09C8_4180_B10C03552EFB.png",
 "data": {
  "name": "IconButton12329"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 512,
 "maxWidth": 768,
 "id": "Image_D24FFF70_F912_E467_41D7_2CFE2FEC6C58",
 "left": "1.66%",
 "width": "8.697%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_D24FFF70_F912_E467_41D7_2CFE2FEC6C58.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "2.78%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "8.698%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image16187"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 947,
 "maxWidth": 947,
 "id": "Image_D4F8C890_F911_ECA7_41E4_B921719CA496",
 "width": "8.242%",
 "right": "0%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_D4F8C890_F911_ECA7_41E4_B921719CA496.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "14.478%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image16217"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.77,
   "yaw": 169.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.93
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2, this.camera_EF97F31E_FF6C_08F4_41E8_2071DD7C2070); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D768183E_89E9_1F29_41C5_77D7DA19D48D",
   "pitch": -16.93,
   "hfov": 14.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 169.54
  }
 ],
 "id": "overlay_CD66F5B4_881F_1139_41C6_A68508D87A05",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.25,
   "yaw": -0.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.5
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C, this.camera_EFAE933C_FF6C_0F35_41E3_322C910A5810); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D768983E_89E9_1F29_41D7_BB2E8BC6F48E",
   "pitch": -43.5,
   "hfov": 19.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.59
  }
 ],
 "id": "overlay_CE706DB3_8819_313F_41A5_5F016E3C0ABD",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.42,
   "yaw": 70.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.05
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E, this.camera_EF92A332_FF6C_08CD_41E5_DFAB60FFB4A2); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D777383E_89E9_1F29_41C9_1E2A3141E363",
   "pitch": -30.05,
   "hfov": 20.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 70.17
  }
 ],
 "id": "overlay_C06FC164_882B_315A_41DA_0E02082F1ACE",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE3C8496_FF6C_09F4_41C5_E4441C69C86E",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.03,
   "yaw": 12.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.08
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6, this.camera_ECBD2905_FF6C_18D7_41AA_2505F5255D6A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75AB834_89E9_1F39_41D9_A36DDFDD3A58",
   "pitch": -7.08,
   "hfov": 7.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.58
  }
 ],
 "id": "overlay_96D547AF_8819_1126_41D4_6AE4A7FF4B42",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.78,
   "yaw": 10.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.55
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84097F44_8819_1159_41AC_A24AD754426D, this.camera_EB4D3924_FF6C_18D4_41B1_E628553DE83D); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7594834_89E9_1F39_4196_FFE1B6B5E5F3",
   "pitch": -4.55,
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 10.2
  }
 ],
 "id": "overlay_975542C6_8818_F359_41D8_DF95B01318A6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.01,
   "yaw": -2.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.45
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84010084_8819_0FD9_41E0_C15DD5732686, this.camera_EB42D938_FF6C_1B3C_41AE_F6CF6BCCAC3E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D759E834_89E9_1F39_41D8_01BD2D86F7DB",
   "pitch": -3.45,
   "hfov": 5.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.5
  }
 ],
 "id": "overlay_A88B41B7_88E7_7126_41C8_A1A2C31F33F6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.01,
   "yaw": 15.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.25
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE, this.camera_EB528956_FF6C_1B75_41E2_596BF9D616E3); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7598834_89E9_1F39_41C3_902EF39B6F34",
   "pitch": -3.25,
   "hfov": 5.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.26
  }
 ],
 "id": "overlay_963F9E34_88E7_1339_41DE_F9464C113DC8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.84,
   "yaw": 84.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.89
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96, this.camera_EE9FCEF6_FF6C_3934_41E7_606A4334F03D); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77D1845_89E9_1F5B_41A0_B3AC0F507429",
   "pitch": -10.89,
   "hfov": 8.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.04
  }
 ],
 "id": "overlay_B7B4E46C_8879_172A_41E1_087B98A07188",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 103.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.83
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826A6B02_881B_12DE_41CA_89AC113E404C, this.camera_EEACFF15_FF6C_38F4_41EB_B55F0CA14C0B); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77D8846_89E9_1F59_41D3_4BB063DBD354",
   "pitch": -12.83,
   "hfov": 8.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 103.01
  }
 ],
 "id": "overlay_B71D09F8_8879_7129_41C8_4C8E693D090C",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFA46347_FF6C_0F54_41D8_6F303A73B89A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED8CC6F9_FF6C_093C_41D2_F71CADAD3FB1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF97C31E_FF6C_08F4_41C8_A2C3AA2648E4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC66F7CA_FF6C_175C_41D3_1F8D6C66CDFC",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.83,
   "yaw": 70.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.67
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2, this.camera_EFB54370_FF6C_0F4C_41DF_10378344B8D4); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7718844_89E9_1F59_41E1_01C11CC1E7EC",
   "pitch": -22.67,
   "hfov": 12.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 70.36
  }
 ],
 "id": "overlay_B2008837_8869_1F26_41D9_47C9301B8C26",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.51,
   "yaw": 102.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.63
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87, this.camera_EE435399_FF6C_0FFC_41E0_CD1B88FBA7EF); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D770E844_89E9_1F59_41D3_E79B4D880F0B",
   "pitch": -8.63,
   "hfov": 8.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 102.62
  }
 ],
 "id": "overlay_B3DA6D28_8869_312A_41A7_A02D82727003",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.11,
   "yaw": 59.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.63
  }
 ],
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96, this.camera_EE4BF38F_FF6C_0FD4_41CD_7537B11462B5); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D7708844_89E9_1F59_41E0_CE4CB95A340B",
   "pitch": -10.63,
   "hfov": 7.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.03
  }
 ],
 "id": "overlay_B282D3E2_886B_1159_41D8_C7432781E036",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.22,
   "yaw": -109.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.15
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_824A89C7_8819_1166_41D8_608468B8A43B, this.camera_EFB28382_FF6C_0FCD_41D7_CD296A8767DA); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77F2844_89E9_1F59_41A9_BFFF244616C2",
   "pitch": -28.15,
   "hfov": 13.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -109.74
  }
 ],
 "id": "overlay_B3F760F9_886B_0F2B_41A3_90D664EF5988",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.15,
   "yaw": -102.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_836A903D_8819_0F2A_41D0_0B24250C7C06, this.camera_EE5803AD_FF6C_0FD4_41C7_E2974365FA7D); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77FA844_89E9_1F59_41A6_0952381A6586",
   "pitch": -12.68,
   "hfov": 9.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -102.02
  }
 ],
 "id": "overlay_B53BAD40_886B_1159_41BD_6089E522B5F0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.91,
   "yaw": -0.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.58
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D, this.camera_EFB9E366_FF6C_0F54_41DB_974844B0B725); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77E5845_89E9_1F5B_41D5_3709BC23D69A",
   "pitch": -5.58,
   "hfov": 6.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.46
  }
 ],
 "id": "overlay_D07F12AA_8839_1329_41C1_86219577F091",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE433399_FF6C_0FFC_41D1_10C19FA8A031",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.65,
   "yaw": -6.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.15
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA, this.camera_EEB5B5AD_FF6C_0BD4_41D6_ECBF7216286E); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EFFA0CDB_FF6C_3973_41DF_54293850757E",
   "pitch": -8.15,
   "hfov": 7.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.31
  }
 ],
 "id": "overlay_86FE8297_883B_13E7_41D1_4B2C4AAA13A7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.68,
   "yaw": -21.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.54
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840A1492_881F_37FE_41E0_470C2F837010, this.camera_ED0DB630_FF6C_08CD_41C7_442E905EA1F5); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EFF54CDB_FF6C_3973_41B8_A8C4B395B5BC",
   "pitch": -5.54,
   "hfov": 6.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -21.5
  }
 ],
 "id": "overlay_86F0A955_8839_117B_4190_1E8C283854BA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.2,
   "yaw": -28.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.96
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52, this.camera_ED7C9611_FF6C_08CF_41AC_E943ECF3A458); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EFF56CDB_FF6C_3973_41E5_6DA965F2BE0D",
   "pitch": -2.96,
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -28.28
  }
 ],
 "id": "overlay_99E80814_8829_1EF9_41C5_E398F63B6560",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.68,
   "yaw": 73.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.2
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8417C642_881F_7359_41D3_634DA2A8F5BF, this.camera_ED6E05F7_FF6C_0B34_41E3_63CA840A2D41); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EFF53CDB_FF6C_3973_41ED_4860AB79E1EA",
   "pitch": -6.2,
   "hfov": 7.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 73.04
  }
 ],
 "id": "overlay_99A504DE_8829_1769_41C7_80911A2CEE37",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.77,
   "yaw": 41.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.22
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8406D831_881F_1F3B_41C0_438B574CC920, this.camera_ED5975DC_FF6C_0B74_4197_00F0FD021656); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EFF4DCDB_FF6C_3973_41E8_E732073045AC",
   "pitch": -9.22,
   "hfov": 7.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 41.59
  }
 ],
 "id": "overlay_9B708A33_8829_133E_41D6_380A066E15B5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.67,
   "yaw": 37.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.21
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84058082_8819_0FDE_41AD_F27316848255, this.camera_ED4AB5CC_FF6C_0B55_41D6_18FE223C86D3); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EFF4ECDB_FF6C_3973_41BC_0586F66CB70C",
   "pitch": -4.21,
   "hfov": 5.67,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 37.78
  }
 ],
 "id": "overlay_98A4A10E_8829_0EE9_41B0_F1C30B6F9C34",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.63,
   "yaw": -80.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_6_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.05
  }
 ],
 "data": {
  "label": "Circle Point 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84080A39_8819_332A_41D4_E05441E9BF55, this.camera_ED03F640_FF6C_094C_41CD_3FDFF20F80FA); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_EFF48CEB_FF6C_395C_41ED_437DD197321F",
   "pitch": -9.05,
   "hfov": 6.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.53
  }
 ],
 "id": "overlay_9C2D2B75_886F_313A_41DF_FE8F66205D89",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.49,
   "yaw": 170.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.02
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56, this.camera_ED3B4042_FF6C_094C_41E2_37915700A34B); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7650837_89E9_1F27_41DA_4020B8809C14",
   "pitch": -22.02,
   "hfov": 9.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 170.73
  }
 ],
 "id": "overlay_AEE7A78F_88EB_11E7_41DA_4DA6D8B8870E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.14,
   "yaw": 3.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.93
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84010084_8819_0FD9_41E0_C15DD5732686, this.camera_ED2B3023_FF6C_08CC_41CC_C069FF06DE56); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D765A837_89E9_1F27_41B9_C9CCCBE797DC",
   "pitch": -7.93,
   "hfov": 10.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.46
  }
 ],
 "id": "overlay_A062A28F_88E9_33E6_41CA_8A4C33F0BAD4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.79,
   "yaw": -38.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.98
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84097F44_8819_1159_41AC_A24AD754426D, this.camera_ED15AFFD_FF6C_3734_41E0_6CF955FAB563); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7642837_89E9_1F27_41B0_5FC707B53EEC",
   "pitch": -16.98,
   "hfov": 9.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -38.8
  }
 ],
 "id": "overlay_AE11BD73_88E9_113F_4192_AA22D9E7C128",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.28,
   "yaw": -85.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.08
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6, this.camera_ED057FDE_FF6C_3774_41D6_57BFD8F46023); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7641837_89E9_1F27_41D9_18CBA5F7F3CE",
   "pitch": -6.08,
   "hfov": 6.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.71
  }
 ],
 "id": "overlay_A0982498_88EF_17EA_41DF_097709BFFDEE",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.55,
   "yaw": 61.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.16
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826A6B02_881B_12DE_41CA_89AC113E404C, this.camera_EDCB2071_FF6C_094C_41DF_6DEB1EC520E5); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D764B837_89E9_1F27_41D7_530E8E0BECE6",
   "pitch": -28.16,
   "hfov": 11.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 61.17
  }
 ],
 "id": "overlay_DB6F2541_8818_F15A_41D1_A63E65AF6F25",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.35,
   "yaw": 5.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.24
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84058082_8819_0FDE_41AD_F27316848255, this.camera_EC98B220_FF6C_08CC_41D5_2BDFDF7761D5); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76FC83B_89E9_1F2F_41D7_0E0A3C0EDE6A",
   "pitch": -8.24,
   "hfov": 14.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.6
  }
 ],
 "id": "overlay_A76B8198_8839_31E9_41A7_46C12CB8759E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.94,
   "yaw": -160.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.67
  }
 ],
 "data": {
  "label": "Circle Arrow 05 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA, this.camera_EC8AC214_FF6C_08F4_41B3_1245B4F5369A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D76E683B_89E9_1F2F_41B8_31601C0E75B9",
   "pitch": 0.67,
   "hfov": 11.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -160.75
  }
 ],
 "id": "overlay_B8F791F2_8839_1139_41B6_EEF99DB4DC37",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.78,
   "yaw": 46.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.81
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87, this.camera_EC2A4857_FF6C_1973_41D7_929D38F79E3A); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7729842_89E9_1F59_41C8_ED49ECB8186A",
   "pitch": -13.81,
   "hfov": 16.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 46.06
  }
 ],
 "id": "overlay_BF756EE8_881B_332A_41E0_CE4EC8747AA0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.1,
   "yaw": -42.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.27
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96, this.camera_EC15283B_FF6C_193C_41E5_38CD34B05CF1); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7710842_89E9_1F59_41DA_A623F3CE5423",
   "pitch": -13.27,
   "hfov": 13.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -42.87
  }
 ],
 "id": "overlay_B0F9F918_881B_1EEA_41DF_FA7725662D55",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.42,
   "yaw": 157.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.07
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82635422_8818_F6D9_41D8_128C70754614, this.camera_EC04F81A_FF6C_18FD_41DD_6CA3D0EB5A2A); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D771D843_89E9_1F5F_41C9_BC1C2BEB31AA",
   "pitch": -18.07,
   "hfov": 16.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.62
  }
 ],
 "id": "overlay_B198DC03_8819_16DF_41D4_9C09DDE13D7D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 151.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.39
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_824A89C7_8819_1166_41D8_608468B8A43B, this.camera_EC7757E9_FF6C_175C_419B_26B6A9D08278); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7704843_89E9_1F5F_41D0_82FB19DEEE0B",
   "pitch": -11.39,
   "hfov": 8.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 151.49
  }
 ],
 "id": "overlay_B0DD804B_8819_0F6E_41AD_1D49EBB3F32D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.04,
   "yaw": 159.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.66
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_836A903D_8819_0F2A_41D0_0B24250C7C06, this.camera_EC3AB86C_FF6C_1954_41D8_A4C3C0D4D717); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D770C843_89E9_1F5F_41CF_8706E08FCEF9",
   "pitch": -7.66,
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.22
  }
 ],
 "id": "overlay_B168FC39_8867_172A_41DA_7E139BE3B11C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.42,
   "yaw": 1.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.35
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840627F6_8819_1126_41D8_593CAA163830, this.camera_EC66E7CA_FF6C_175C_41D0_5A3095C9E11E); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7709843_89E9_1F5F_41D1_47E9F19DE095",
   "pitch": -5.35,
   "hfov": 6.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.21
  }
 ],
 "id": "overlay_CB39AA59_886B_336B_41C3_C4860BCF56ED",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC533163_FF6C_0B4C_41EC_05A641820B02",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE9FFEF6_FF6C_3934_41EE_79AE81B966C6",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECBE723F_FF6C_0934_41EE_143752CD475F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC986220_FF6C_08CC_41D8_1FD4D4794E8A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED157FFD_FF6C_3734_41E6_3ACF55930F8B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE4BC38F_FF6C_0FD4_41EF_6224BBFD5CC8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE5813AD_FF6C_0FD4_41EC_FAE204094434",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC7707E9_FF6C_175C_41E5_518245646022",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDD87097_FF6C_09F4_41C8_8F4C0F8C2902",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDADD73E_FF6C_1734_41E9_108EFA4F1535",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEF9B538_FF6C_0B3D_41A0_17354EC2F4F4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED9C00EB_FF6C_095C_41DB_E6F9E7013131",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECDBF88C_FF6C_19D4_41CF_067F2CA10F4F",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.79,
   "yaw": 48.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.49
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C, this.camera_EC37E1CE_FF6C_0B55_41EA_B24B7CA74987); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76DC83C_89E9_1F29_41DF_C8A3F84C3190",
   "pitch": -31.49,
   "hfov": 11.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 48.19
  }
 ],
 "id": "overlay_C1D28F9B_882F_11EF_41C2_E62786D8A70F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.05,
   "yaw": -5.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.17
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8436733A_8819_112E_41D3_781CB6DC8810, this.camera_ECC7B1D9_FF6C_0B7C_41EB_0973AA8BE753); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76C783C_89E9_1F29_41CE_26E53F8BF8D1",
   "pitch": -14.17,
   "hfov": 9.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -5.43
  }
 ],
 "id": "overlay_C1792294_882F_73FA_41D6_E72D87270443",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.27,
   "yaw": 23.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.04
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_842D5078_881F_0F29_41D0_E002DB468D4B, this.camera_EC27E1BA_FF6C_0B3C_41DF_79697E1351AF); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76CE83C_89E9_1F29_41DB_61105BF28D65",
   "pitch": -15.04,
   "hfov": 9.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 23.99
  }
 ],
 "id": "overlay_C2F350A7_8829_0F27_41D9_11CDDCA1C157",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED340685_FF6C_09D4_41EA_7E3C6625CE94",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED9D7728_FF6C_08DC_41EE_81186F5F13F8",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECD551E3_FF6C_0B4C_41D5_0E535D6911D7",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEB37F4B_FF6C_375C_41E4_373FE9EA4B9A",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.37,
   "yaw": 18.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.33
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840A1492_881F_37FE_41E0_470C2F837010, this.camera_EEF88EC3_FF6C_394C_41D1_44694C4F6BD4); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D751082F_89E9_1F27_41CF_C07C653AEBCF",
   "pitch": -7.33,
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 18.92
  }
 ],
 "id": "overlay_9651CF51_8839_117B_41DE_C7F167C7C5F1",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.59,
   "yaw": 20.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.19
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA, this.camera_EEEA0EB3_FF6C_3933_41EC_A17A3FB6AE1A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D751D82F_89E9_1F27_41C8_9534E580C546",
   "pitch": -4.19,
   "hfov": 7.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 20.73
  }
 ],
 "id": "overlay_9651DF51_8839_117B_41E0_DBF958D0CF3A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.92,
   "yaw": 31.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.56
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6, this.camera_EED56EA2_FF6C_39CC_41E2_75B44231852E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D750782F_89E9_1F27_41AA_B84DD4DD589B",
   "pitch": -3.56,
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.83
  }
 ],
 "id": "overlay_9651AF52_8839_1179_41E0_F61E49FDD022",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.36,
   "yaw": -60.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.88
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6, this.camera_EEC4AE82_FF6C_39CD_41E9_7C56927B8B2C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7502830_89E9_1F39_41DF_9A9EC3D49AFD",
   "pitch": -7.88,
   "hfov": 9.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -60.79
  }
 ],
 "id": "overlay_9651BF52_8839_1179_41C2_42D480BAE681",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": -100.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.33
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F43DA9_8819_712B_41B4_52595D130F77, this.camera_EE89FEE6_FF6C_3955_41B0_342F4EDDA1F2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D750C830_89E9_1F39_41BF_74D505252831",
   "pitch": -8.33,
   "hfov": 9.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -100.35
  }
 ],
 "id": "overlay_96518F52_8839_1179_41B6_142FD10AEDA1",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB0D0286_FF6C_09D4_41E3_20FC3A00BC54",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDDB46B1_FF6C_09CC_41E0_AECCCC7265CA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED8E60DC_FF6C_0974_41B6_32033A4D864D",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE67EE03_FF6C_38D3_41EC_C10EE8884C05",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EECA24DB_FF6C_097C_41E0_5A21C32581C5",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB4D1924_FF6C_18D4_41AA_E0C2BB34DDEC",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE962587_FF6C_0BD3_41AB_47D8C7895F08",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE8D8559_FF6C_0B7C_41E8_681CABD596B9",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.96,
   "yaw": -1.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.68
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840627F6_8819_1126_41D8_593CAA163830, this.camera_ECD541E3_FF6C_0B4C_41DD_ADAA2CEB2888); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76E383B_89E9_1F2F_41DF_B3F766ED57DE",
   "pitch": -27.68,
   "hfov": 21.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.78
  }
 ],
 "id": "overlay_CCAE80B2_8867_0F39_4169_11C2CBBD861A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.05,
   "yaw": -84.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.39
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2, this.camera_ECE541F7_FF6C_0B34_41EA_F9BA7BB8241C); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76EB83B_89E9_1F2F_41D0_AA596AFF3924",
   "pitch": -16.39,
   "hfov": 12.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.83
  }
 ],
 "id": "overlay_CDDAD4E4_8867_1759_41C8_E2BEEE83026B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.42,
   "yaw": -92.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.65
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82635422_8818_F6D9_41D8_128C70754614, this.camera_ECFAC201_FF6C_08CF_41EE_0B4E93AD71FB); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76D283B_89E9_1F2F_41CE_E9EFD732F6DE",
   "pitch": -11.65,
   "hfov": 8.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.53
  }
 ],
 "id": "overlay_CD7D0CC1_8818_F75A_41C4_93BA367B5F96",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDE9D6D0_FF6C_094C_41DB_A8FF939AAC2F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC9F48DD_FF6C_1974_41C3_7682FBC1EB58",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.59,
   "yaw": -71.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.59
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D, this.camera_EDD89097_FF6C_09F4_41DA_3C5DA1E52E42); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D777483F_89E9_1F27_41E0_DC3CD9E7C75B",
   "pitch": -39.59,
   "hfov": 31.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -71.69
  }
 ],
 "id": "overlay_C7AA7127_882F_1127_41BE_8AAE75C557D5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.3,
   "yaw": 158.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.49
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8623B92F_8819_F127_4193_EB189FF61F98, this.camera_EDE8C0A6_FF6C_09D4_41E9_DD98D6A29BBB); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D777C83F_89E9_1F27_41C0_0AB26DEDA7B4",
   "pitch": -23.49,
   "hfov": 11.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.87
  }
 ],
 "id": "overlay_D8DB9C78_8829_3729_41BB_3AE5BF08910F",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB526956_FF6C_1B75_41B4_009A24AB2CD1",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.52,
   "yaw": 39.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.61
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6, this.camera_ED11165F_FF6C_0973_41EC_87E443547EB8); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7584835_89E9_1F3B_41DE_AAD762B84441",
   "pitch": -13.61,
   "hfov": 11.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 39.7
  }
 ],
 "id": "overlay_A8A97A82_88E9_13D9_41DE_A9688C510B1A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.54,
   "yaw": -50.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.95
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F09F55_8819_117A_41C8_5EE5232FB520, this.camera_EDDB66B1_FF6C_09CC_41E1_7619534F985A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D758E835_89E9_1F3B_41AE_F32073D7F828",
   "pitch": -6.95,
   "hfov": 8.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -50.73
  }
 ],
 "id": "overlay_A82D7245_88E8_F35B_41DC_031FA0B974A6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.87,
   "yaw": 126.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.97
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840A1492_881F_37FE_41E0_470C2F837010, this.camera_EDCA96AA_FF6C_09DD_41E6_6FB9B6E664E2); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7588835_89E9_1F3B_41DA_3A108E2FAD26",
   "pitch": -5.97,
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 126.02
  }
 ],
 "id": "overlay_A9551BF3_88EF_713E_41BA_AE653F903601",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6,
   "yaw": 112.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.78
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6, this.camera_ED279675_FF6C_0937_41E0_0EB970A2BBF2); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7675835_89E9_1F3B_41C6_A3A2AABDBAAB",
   "pitch": -3.78,
   "hfov": 6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 112.58
  }
 ],
 "id": "overlay_977741C0_88EF_115A_41E1_0948CFE4AEDE",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.59,
   "yaw": 106.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.19
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA, this.camera_ED345685_FF6C_09D4_41E4_7C1440286B79); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7599835_89E9_1F3B_41DC_FDDCE03035BA",
   "pitch": -4.19,
   "hfov": 4.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 106.75
  }
 ],
 "id": "overlay_A9E82477_88E9_1726_41AD_C5B4A43E64FC",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFB57D94_FF6C_3BF4_41B6_BDC1A00DD810",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.11,
   "yaw": 3.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.33
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_EB6FF267_FF6C_0953_41EA_D6D6E3CD9B8F, this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4); this.startPanoramaWithCamera(this.panorama_84058082_8819_0FDE_41AD_F27316848255, this.camera_EB6FF267_FF6C_0953_41EA_D6D6E3CD9B8F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75E5830_89E9_1F39_41DA_65ABDB5977BE",
   "pitch": -28.33,
   "hfov": 18.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.04
  }
 ],
 "id": "overlay_9E51A68D_887B_33EB_41D1_29674DE07132",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.69,
   "yaw": -166.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.12
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8401EF6D_8819_112B_41CA_4E8E5840228F, this.camera_EB5F925D_FF6C_0977_41B5_E2EFB8F738FA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7508831_89E9_1F3B_41C1_813D6A2770B1",
   "pitch": -14.12,
   "hfov": 15.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -166.63
  }
 ],
 "id": "overlay_9E24B4BD_8879_772A_41D2_A6BD1823DB12",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.34,
   "yaw": 172.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.85
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84010084_8819_0FD9_41E0_C15DD5732686, this.camera_EB7D427C_FF6C_0934_41D8_70B45D2F2D61); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75F5831_89E9_1F3B_41DF_060639A74DFF",
   "pitch": -6.85,
   "hfov": 10.34,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 172.3
  }
 ],
 "id": "overlay_9E2B1CD7_8867_1766_41D5_1755AD2EEC2D",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDB3B77C_FF6C_1734_41E8_66F54D106DE7",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED050FDE_FF6C_3774_41DB_39BCD8D2C205",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFBF7D75_FF6C_3B34_41C3_E699666A79B4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE6BF3CE_FF6C_0F55_41DD_F5A9D900C8B9",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE53FDE9_FF6C_3B5C_41CE_86AC716C7BB2",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE599DD9_FF6C_3B7C_41E6_B00C37168DAA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECFAA201_FF6C_08CF_41EF_61ADD3242A01",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -57.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.44
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE, this.camera_EDB2113D_FF6C_0B34_41E1_7C2A0907E27B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75D5832_89E9_1F39_41BE_DA8434803A82",
   "pitch": -14.44,
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -57.66
  }
 ],
 "id": "overlay_9208AA39_881B_132A_41D2_1DD6C2B6AFD1",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12,
   "yaw": 63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.22
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6, this.camera_ED9C20EB_FF6C_095C_41C9_6304C1BEB14C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75DE832_89E9_1F39_41CF_879066A9C2C4",
   "pitch": -11.22,
   "hfov": 12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 63
  }
 ],
 "id": "overlay_930E6128_8819_7129_41E0_A97848D55DBB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.23,
   "yaw": 155.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.63
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84010084_8819_0FD9_41E0_C15DD5732686, this.camera_EDA2211A_FF6C_08FC_41BC_62F27EA9C00D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75D8832_89E9_1F39_419B_DD9AD4CF3B27",
   "pitch": -13.63,
   "hfov": 10.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 155.96
  }
 ],
 "id": "overlay_91FBBD37_8818_F127_41C9_E6E7B97835D9",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.46,
   "yaw": -35.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.13
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75C5832_89E9_1F39_41DD_787A7D8B3526",
   "pitch": -3.13,
   "hfov": 9.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -35.31
  }
 ],
 "id": "overlay_943BD4E5_882F_F75B_41D4_711B10392468",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.19,
   "yaw": 58.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.47
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F09F55_8819_117A_41C8_5EE5232FB520, this.camera_EDAC80FB_FF6C_093C_41B3_68DA87E8E27C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75CC833_89E9_1F3F_41C1_C74A506E5B9F",
   "pitch": -1.47,
   "hfov": 6.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 58.23
  }
 ],
 "id": "overlay_945A8F53_8829_717E_41D7_26ADC288AE9F",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE1D8446_FF6C_0954_41D3_08058147AD39",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB6FA267_FF6C_0953_41EB_85AB607B3F5B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE092427_FF6C_08D4_41EF_D7CDA22154CE",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE4CADA4_FF6C_3BD4_41E7_6FD9138F3974",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.66,
   "yaw": 0.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.04
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8430DB27_8819_1127_41D1_76C0382FB641, this.camera_EE6813CE_FF6C_0F55_41BB_FDC0FC800D4B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7766840_89E9_1F59_41D6_BB9128C03981",
   "pitch": -42.04,
   "hfov": 20.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.57
  }
 ],
 "id": "overlay_C612DD6E_882B_1126_41CC_A9BE76A32CBE",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.91,
   "yaw": 154.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.05
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2, this.camera_EE5343B7_FF6C_0F34_41EA_43B7074ACFE3); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_84D056BB_8BAC_48B7_41BC_65DE43DD7878",
   "pitch": -18.05,
   "hfov": 13.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 154.03
  }
 ],
 "id": "overlay_84BC281A_8BAF_C774_41DD_71D6FD4E9BA4",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB4E0249_FF6C_095C_41D8_C60CF8D81F00",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE817578_FF6C_0B3C_41BD_EBB353E7FC42",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEB565AD_FF6C_0BD4_41ED_FE07D8168CDB",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEDE94F3_FF6C_094C_41E6_38B579ED81AD",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.93,
   "yaw": -71.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.51
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_842D5078_881F_0F29_41D0_E002DB468D4B, this.camera_EC436144_FF6C_0B5B_41D2_5D5D420A38E4); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D76BD83D_89E9_1F2B_41D4_1A00C99E8E9F",
   "pitch": -2.51,
   "hfov": 10.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -71.1
  }
 ],
 "id": "overlay_C238CF3E_8829_F126_41CE_948F7A3E3684",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.04,
   "yaw": -0.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.73
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C, this.camera_EC60F172_FF6C_0B4D_41D4_3B380B3C4DF2); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76A783D_89E9_1F2B_41E0_480E0737E2D3",
   "pitch": -15.73,
   "hfov": 8.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.29
  }
 ],
 "id": "overlay_C32B2C12_8827_16FE_41B5_11D609EF3D64",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.41,
   "yaw": -0.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.96
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840627F6_8819_1126_41D8_593CAA163830, this.camera_EC535163_FF6C_0B4C_41D3_EBAF8397DA1C); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76AE83D_89E9_1F2B_41D0_618A39A57DFF",
   "pitch": -9.96,
   "hfov": 7.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.25
  }
 ],
 "id": "overlay_C5495DD6_8839_1179_41C9_B19913C20418",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEA735AD_FF6C_0BD4_41E6_4E72F61F7B52",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC432153_FF6C_0B4C_41E2_82E2CC8F0F2A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDA3775D_FF6C_1774_41E7_CA84F0F18B7B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDFEB6D9_FF6C_097F_41DE_232BCBC16D76",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF9A7310_FF6C_08CC_41CA_6CB8897A2815",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE171455_FF6C_0977_41DB_ED8E19566289",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.15,
   "yaw": -43.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.21
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840A1492_881F_37FE_41E0_470C2F837010, this.camera_EFA48347_FF6C_0F54_41EB_43E94EEDDDEB); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7632838_89E9_1F29_41B3_339EB11A9DD6",
   "pitch": -9.21,
   "hfov": 14.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.24
  }
 ],
 "id": "overlay_A0C4180F_88E7_7EE6_41B3_A7C216586B42",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.93,
   "yaw": 134.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE, this.camera_EFA0035A_FF6C_0F7C_41E6_BC9A134146C4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D763C838_89E9_1F29_41CB_E70C78C30BD9",
   "pitch": -6.59,
   "hfov": 10.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 134.7
  }
 ],
 "id": "overlay_A05FFC1F_88E7_36E7_41D7_91062F12A0B2",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EED00509_FF6C_08DF_41E6_D214852B3F94",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC60D172_FF6C_0B4D_41EC_F3F39A420BF4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED6E15F7_FF6C_0B34_41DE_9ECC3C604A52",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED10F65F_FF6C_0973_41D1_07B1ED772832",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDCA66AA_FF6C_09DD_41D7_B5D87EF34116",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC8AA214_FF6C_08F4_41EC_34FE4AC2BC1C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEE5DEB3_FF6C_3933_41D1_D19AE751CFDF",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE2B0480_FF6C_09CC_41EA_733ABF863B6F",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.71,
   "yaw": 53.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.38
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_842D5078_881F_0F29_41D0_E002DB468D4B, this.camera_EE3CB496_FF6C_09F4_41EB_DD6BC52525F4); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D76A883D_89E9_1F2B_41D6_EAA8C26D0B86",
   "pitch": -0.38,
   "hfov": 12.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.92
  }
 ],
 "id": "overlay_CFACADDD_8819_F16B_41BF_F07548FB1DCC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.81,
   "yaw": 0.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.1
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8436733A_8819_112E_41D3_781CB6DC8810, this.camera_EEDEA4F3_FF6C_094C_41E9_35CAC4F172A5); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D769383D_89E9_1F2B_41C1_67DCF3993939",
   "pitch": -13.1,
   "hfov": 7.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.33
  }
 ],
 "id": "overlay_C0FFD6D3_8827_137E_41CA_71A2617E60D2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.16,
   "yaw": -83.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.34
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8430CEEA_881F_3329_41B1_241573C33BA1, this.camera_EE30F4B4_FF6C_0935_41EE_1EBB49A0FB52); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D769D83E_89E9_1F29_41D7_077D0D45C34D",
   "pitch": -26.34,
   "hfov": 20.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -83.64
  }
 ],
 "id": "overlay_C04D2D25_8829_16DB_41C1_43B10B476A8D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.1,
   "yaw": -165.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.02
  }
 ],
 "data": {
  "label": "Arrow 06a Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840627F6_8819_1126_41D8_593CAA163830, this.camera_EECA54DB_FF6C_097C_41EC_B28A2808638B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_B0A76369_A06E_7FC8_41C5_B24AE42D4BDA",
   "pitch": -35.02,
   "hfov": 28.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -165.57
  }
 ],
 "id": "overlay_AE8EC944_A06A_0B38_41C8_E326CB05FD42",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED0D9630_FF6C_08CD_41DF_5332ABC39883",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.15,
   "yaw": 20.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.36
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F09F55_8819_117A_41C8_5EE5232FB520, this.camera_ED674F99_FF6C_37FC_41D4_C9135957FC50); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7673836_89E9_1F39_41D0_08A8203754FA",
   "pitch": -1.36,
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 20.75
  }
 ],
 "id": "overlay_AB0ACCEE_88F9_1729_41BD_ADDBB864CB03",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.82,
   "yaw": -0.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.93
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6, this.camera_ED51AF79_FF6C_373F_41EC_3F164185A4B2); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D767D836_89E9_1F39_41A8_1F2EECBC3DBA",
   "pitch": -5.93,
   "hfov": 5.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.58
  }
 ],
 "id": "overlay_AC873D74_88F9_3139_41C9_42C41EA69414",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.81,
   "yaw": -52.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.77
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE, this.camera_ED775FBE_FF6C_3735_41D5_C59AEA306F81); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7666836_89E9_1F39_41D1_380E4016180C",
   "pitch": -6.77,
   "hfov": 5.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -52.37
  }
 ],
 "id": "overlay_ADFC0C7E_88FF_1726_41C9_AB0C98FE42E4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.27,
   "yaw": -50.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.43
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56, this.camera_ED415F5A_FF6C_377C_41DA_20B5779C9CFA); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7662836_89E9_1F39_41D7_B203B8F66DB2",
   "pitch": -3.43,
   "hfov": 4.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -50.74
  }
 ],
 "id": "overlay_AB0F54EF_88FF_1727_419F_FEBCD40FA223",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.75,
   "yaw": -142.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.4
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8401EF6D_8819_112B_41CA_4E8E5840228F, this.camera_EEA32F25_FF6C_38D4_41C5_ABA45D78C4CC); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D766D836_89E9_1F39_41E0_D139471EBFFC",
   "pitch": -10.4,
   "hfov": 5.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -142.85
  }
 ],
 "id": "overlay_AC71042B_88FF_772F_41D9_75218157A9BB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.74,
   "yaw": -134.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.87
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4, this.camera_EEB3AF4B_FF6C_375C_41E2_FE16F8EC44F8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7656837_89E9_1F27_41D3_26A3380F5444",
   "pitch": -5.87,
   "hfov": 4.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -134.08
  }
 ],
 "id": "overlay_AB038773_88F8_F13F_41D3_FD132A2B7D66",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.37,
   "yaw": -55.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.28
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4, this.camera_EE128E5D_FF6C_3974_41A4_FCD591134CCF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7580835_89E9_1F3B_41DF_34DFEA98587D",
   "pitch": -11.28,
   "hfov": 22.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -55.52
  }
 ],
 "id": "overlay_AAD46C15_88E7_16FA_41A3_7853F3E14102",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.75,
   "yaw": -46.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.32
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84058082_8819_0FDE_41AD_F27316848255, this.camera_EE361E7C_FF6C_3934_41ED_217EC777A7DE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D758C836_89E9_1F39_41D8_4CD52F5418CC",
   "pitch": -4.32,
   "hfov": 10.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -46.72
  }
 ],
 "id": "overlay_ABA98B76_88E7_1126_41E0_6D8FC0A55461",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.48,
   "yaw": 103.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.67
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84010084_8819_0FD9_41E0_C15DD5732686, this.camera_EE213E6C_FF6C_3955_41DA_FF7C6200CEF8); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7589836_89E9_1F39_41CA_7D934EF97977",
   "pitch": -8.67,
   "hfov": 10.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 103.42
  }
 ],
 "id": "overlay_A9431D6E_88F9_7129_41D3_81838C6DA3F2",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFAE633C_FF6C_0F35_41C5_0533FF3480DD",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE793E1E_FF6C_38F4_41C4_323D091D0EC1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC27C1BA_FF6C_0B3C_41BF_CE87C424506C",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.06,
   "yaw": -88.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.98
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82623EF2_881B_133E_41D7_F5E60A69931B, this.camera_EE443DC9_FF6C_3B5F_41E8_3623EE24F46F); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77A6847_89E9_1F67_41AC_EB084F0EEEC5",
   "pitch": -11.98,
   "hfov": 13.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.39
  }
 ],
 "id": "overlay_CADF30A0_8869_0FD9_41C2_0DC1C9C5D20E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.66,
   "yaw": 7.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.49
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96, this.camera_EE4CBDA4_FF6C_3BD4_41E0_F3D0CC144F02); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77AE847_89E9_1F67_41D6_7625643C8722",
   "pitch": -18.49,
   "hfov": 12.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.03
  }
 ],
 "id": "overlay_CA485B47_8869_1167_41DB_39BB62A9611B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.18,
   "yaw": 152.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -63.66
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE, this.camera_EE59CDD9_FF6C_3B7C_41EE_4B8F6F0312BC); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D77A9847_89E9_1F67_41DE_34AD4CD1FBCE",
   "pitch": -63.66,
   "hfov": 15.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 152.02
  }
 ],
 "id": "overlay_DAE30BB7_8819_3127_4178_C76D058AF04E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.2,
   "yaw": -60.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.87
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C, this.camera_EDFE90C5_FF6C_0957_41D7_99CC7455E1CF); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D76CB83C_89E9_1F29_41D5_2CA844179B8C",
   "pitch": -0.87,
   "hfov": 7.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -60.34
  }
 ],
 "id": "overlay_C33C5731_8839_113B_41D7_4047AB439987",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.57,
   "yaw": 60.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.51
  }
 ],
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8436733A_8819_112E_41D3_781CB6DC8810, this.camera_ED8E90DC_FF6C_0974_41E3_B668EB359962); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D76B283C_89E9_1F29_41D1_3C1F7346674F",
   "pitch": 2.51,
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 60.56
  }
 ],
 "id": "overlay_C31DF368_883B_112A_41BC_10E88A567ACD",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED5945DC_FF6C_0B74_41EF_9110B8F0C9F6",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC2A2857_FF6C_1973_41CE_A74221A26280",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED277675_FF6C_0937_41E4_E72F8E7773F5",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC5177B1_FF6C_17CF_41BB_454F9DBD1263",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED414F5A_FF6C_377C_41EA_E067229157CC",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC1641B0_FF6C_0BCC_41E1_D345CE4536B3",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED3B3042_FF6C_094C_41E0_3DDCBEC5AD45",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC89B8CA_FF6C_195C_41E1_2302CCE77795",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDA2011A_FF6C_08FC_41E5_1AA4C8F58DE1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE5323B7_FF6C_0F34_41E7_C06D3D69C4ED",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF9E32FD_FF6C_0937_41DA_93FBE9A68085",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDE8A0A6_FF6C_09D4_41A6_9FECC8628058",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFB52370_FF6C_0F4C_41E8_9F73E3C775DB",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC4DC13D_FF6C_0B34_41D8_FC55C54693D4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB02E2A2_FF6C_09CC_41ED_E5A42AC47B6D",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC04C81A_FF6C_18FD_41D3_7E846C37DAE3",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB7D527C_FF6C_0934_41EF_11C8283C86B9",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFB27382_FF6C_0FCD_41E8_7379AE3BE190",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC70A192_FF6C_0BCC_41EB_C2A73BBC7C18",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE899EE6_FF6C_3955_41CE_57A7CAE57883",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC41679B_FF6C_17F3_41E9_91884E78DC93",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED03B640_FF6C_094C_41D5_1FE3011F1084",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDFE60C5_FF6C_0957_41EC_0B8BC6B2D851",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.18,
   "yaw": -7.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.85
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82635422_8818_F6D9_41D8_128C70754614, this.camera_EC1691AE_FF6C_0BD2_41E0_11A86396D02B); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D773C841_89E9_1F5B_41DB_83620A320B6C",
   "pitch": -8.85,
   "hfov": 6.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -7.15
  }
 ],
 "id": "overlay_BD78F2BE_8827_3329_41BC_9BC35E4ABFB0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.15,
   "yaw": -20.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.54
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2, this.camera_EC70C192_FF6C_0BCC_41E3_B24B128A5854); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7726842_89E9_1F59_41B2_7C21DC9F9F73",
   "pitch": -7.54,
   "hfov": 5.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.98
  }
 ],
 "id": "overlay_BE8BFAE5_8827_F35B_4191_AA391A9BEC94",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.11,
   "yaw": 131.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.65
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4, this.camera_EC0641A1_FF6C_0BCF_41EB_0FA8D6E0CA89); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7721842_89E9_1F59_41D7_6533060D8D6D",
   "pitch": -13.65,
   "hfov": 11.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 131.47
  }
 ],
 "id": "overlay_BEB2CCEC_8819_172A_41D9_E8D917C57ECF",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFA13D65_FF6C_3B57_41DC_10567F19FC2F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EF92B332_FF6C_08CD_41E6_53EAD02303DF",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDCB0071_FF6C_094C_41E1_FCE94BE9DB79",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECC781D9_FF6C_0B7C_41ED_839A0F947EEF",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED7C6611_FF6C_08CF_41D9_8FB609AD4358",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECA8422A_FF6C_08DD_41ED_8AC4CFEDFEF0",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.66,
   "yaw": 77.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.92
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA, this.camera_EFA11D65_FF6C_3B57_41D5_9F9F69BEB4F5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D760183A_89E9_1F29_419A_F4C1F69B536C",
   "pitch": -2.92,
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 77.26
  }
 ],
 "id": "overlay_A686DAB6_8828_F326_41D4_CB5403E53EF3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.65,
   "yaw": 169.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.15
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84058082_8819_0FDE_41AD_F27316848255, this.camera_EFBF4D75_FF6C_3B34_41DD_C7E88818682B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D760B83A_89E9_1F29_41C5_9E8DEDEC8BBD",
   "pitch": -4.15,
   "hfov": 7.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 169.29
  }
 ],
 "id": "overlay_A61E7327_8829_7127_419A_21F61A098A16",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.39,
   "yaw": 87.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.51
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8406D831_881F_1F3B_41C0_438B574CC920, this.camera_EFB54D94_FF6C_3BF4_41E2_8A750DF2B993); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D76F783A_89E9_1F29_41CC_74B5F63E78CE",
   "pitch": -15.51,
   "hfov": 7.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 87.36
  }
 ],
 "id": "overlay_B8A32D66_8829_F159_41DA_47CC1E73CAD3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.79,
   "yaw": -123.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.91
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6, this.camera_ECA8922A_FF6C_08DD_41ED_A65FBFD52F21); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75F7830_89E9_1F39_41B2_FB0F32A4739E",
   "pitch": -2.91,
   "hfov": 10.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -123.84
  }
 ],
 "id": "overlay_9CA441AD_8867_112A_41E0_374C0784A178",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.79,
   "yaw": -157.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.15
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA, this.camera_ECBE623F_FF6C_0934_41E6_B4206BAB8823); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75F3830_89E9_1F39_41D5_FE21E6FDAC08",
   "pitch": -3.15,
   "hfov": 10.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.5
  }
 ],
 "id": "overlay_9D1939C5_8867_315B_41DA_43FF65B425BB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.02,
   "yaw": 174.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.16
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840A1492_881F_37FE_41E0_470C2F837010, this.camera_EB4E2249_FF6C_095C_41E1_C8477FEA9AF8); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75FA830_89E9_1F39_41D6_FC17DD22699A",
   "pitch": -2.16,
   "hfov": 9.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 174.09
  }
 ],
 "id": "overlay_9D6BA728_8867_7129_41D7_C8161EF51665",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC15183B_FF6C_193C_41C7_56CE256F642A",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -13.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.99
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4, this.camera_EE67CE03_FF6C_38D3_41D7_E79CC7EE935B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75B6833_89E9_1F3F_41C4_92D788307875",
   "pitch": -11.99,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -13.84
  }
 ],
 "id": "overlay_94D2CBEB_8819_112F_41D5_7AFC06C47E04",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.79,
   "yaw": -8.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.02
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8401EF6D_8819_112B_41CA_4E8E5840228F, this.camera_EE53DDE9_FF6C_3B5C_41DD_3618B75E6F53); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75B2833_89E9_1F3F_41C3_50E1FCC97287",
   "pitch": -7.02,
   "hfov": 6.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -8.38
  }
 ],
 "id": "overlay_9570E3DA_8819_116E_41C8_CBBFA4FCB29B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.15,
   "yaw": -19.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.68
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84010084_8819_0FD9_41E0_C15DD5732686, this.camera_EE790E1E_FF6C_38F4_41EC_B29D1367CDA2); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75BC833_89E9_1F3F_41D8_5D7F34A9E7B3",
   "pitch": -3.68,
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -19.7
  }
 ],
 "id": "overlay_94E8CFF5_8819_313B_41C3_520B69829B4D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.95,
   "yaw": -134.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.75
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8406D831_881F_1F3B_41C0_438B574CC920, this.camera_EE022E3D_FF6C_3937_41E9_D070FEC7BBB9); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75B9833_89E9_1F3F_41CD_33C154F70BCD",
   "pitch": -5.75,
   "hfov": 8.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -134.32
  }
 ],
 "id": "overlay_9510AB6E_8819_7129_41D4_4F1961233B45",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.89,
   "yaw": -37.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.56
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4, this.camera_EE0FBE3D_FF6C_3937_41DE_2863312329D6); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75A0834_89E9_1F39_41C5_FDBCA5E154B5",
   "pitch": -12.56,
   "hfov": 7.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -37.04
  }
 ],
 "id": "overlay_B609585D_887F_1F6B_41D2_7BF49E0C147B",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE125E5D_FF6C_3974_41D8_32F6383647E4",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE62C3E9_FF6C_0F5C_41EF_D1E16A25853F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE47DDC9_FF6C_3B5F_41DE_938EDEAC1C51",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED771FBE_FF6C_3735_41DC_44BF4076012A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFA3E35A_FF6C_0F7C_41CB_93660684E6C1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECCBF880_FF6C_19CC_41D4_3D0CEBAADB5A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EDAC70FB_FF6C_093C_419B_7E2961D37811",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEF8BEC3_FF6C_394C_41D4_1AD2A297657B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECF998B5_FF6C_1934_41EE_E9A2415D914C",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.87,
   "yaw": -42.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.17
  }
 ],
 "data": {
  "label": "Circle Arrow 05 Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D, this.camera_ECCBE880_FF6C_19CC_41EF_94BE7355422F); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D768483F_89E9_1F27_41DF_0B1E7D7C5A2A",
   "pitch": -0.17,
   "hfov": 16.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -42.54
  }
 ],
 "id": "overlay_D88D42FE_882B_1329_41D7_59772385589C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.39,
   "yaw": -52.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.53
  }
 ],
 "data": {
  "label": "Circle Arrow 03b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8430DB27_8819_1127_41D1_76C0382FB641, this.camera_ECD8088C_FF6C_19D4_41B6_A8E28407A06E); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D768D83F_89E9_1F27_41DD_CC762A2786A3",
   "pitch": -35.53,
   "hfov": 17.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -52.72
  }
 ],
 "id": "overlay_D96E74B6_8829_3726_4197_3A89192F7E34",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB5F625D_FF6C_0977_41C8_10211DA69964",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEA2FF25_FF6C_38D4_41BA_31317BD3080B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECAF78F9_FF6C_193C_41D5_CFDD36C046C0",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEE43529_FF6C_08DC_41D6_9465ACC39529",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE212E6C_FF6C_3955_41EB_94C96722016F",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE778407_FF6C_08D3_41C6_A5336900DE36",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EB42B938_FF6C_1B3C_41E8_65BA5553400C",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED671F99_FF6C_37FC_41CF_7D6962D48020",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEC45E82_FF6C_39CD_41C0_4A36133898B5",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.28,
   "yaw": -96.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.15
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840A1492_881F_37FE_41E0_470C2F837010, this.camera_EE967587_FF6C_0BD3_41D1_4751F5C93CF8); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D761D839_89E9_1F2B_41C4_FD3E6880D72B",
   "pitch": -8.15,
   "hfov": 14.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -96.85
  }
 ],
 "id": "overlay_A3058754_8829_1179_41D6_90110901055A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.21,
   "yaw": -97.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.76
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52, this.camera_EE816578_FF6C_0B3C_41DF_8E7B3843F9D9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7606839_89E9_1F2B_41CD_9C5923921C19",
   "pitch": -3.76,
   "hfov": 7.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -97.87
  }
 ],
 "id": "overlay_A4C29BB4_8829_1139_41AA_EA78F272F383",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.18,
   "yaw": -170.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.48
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84080A39_8819_332A_41D4_E05441E9BF55, this.camera_EEA725AD_FF6C_0BD4_41D8_52CC349F234B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7603839_89E9_1F2B_41E1_02202DAF44B1",
   "pitch": -6.48,
   "hfov": 7.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.39
  }
 ],
 "id": "overlay_A6B15BE0_8829_115A_41DC_DC5947BBA0AA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.14,
   "yaw": 41.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.51
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8406D831_881F_1F3B_41C0_438B574CC920, this.camera_EEF9D538_FF6C_0B3D_41E0_7236B31AA16B); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7617839_89E9_1F2B_41D5_E441BAE7CC12",
   "pitch": -8.51,
   "hfov": 7.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 41.61
  }
 ],
 "id": "overlay_A36B794E_882B_7169_41D2_891B36CAE900",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.19,
   "yaw": 65.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.41
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8417C642_881F_7359_41D3_634DA2A8F5BF, this.camera_EE8DA559_FF6C_0B7C_41E0_E3055A8D390E); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D761183A_89E9_1F29_41C2_386C29E824FB",
   "pitch": -5.41,
   "hfov": 7.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 65.78
  }
 ],
 "id": "overlay_A5B9C3A4_882B_11DA_41B4_508D35B00DAE",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.15,
   "yaw": 127.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_5_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.37
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6, this.camera_EEE45529_FF6C_08DC_41C5_09B24F6D65A2); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D761A83A_89E9_1F29_41E1_0D191312742D",
   "pitch": -8.37,
   "hfov": 7.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 127.15
  }
 ],
 "id": "overlay_A364F79E_882B_11E9_41DE_5988408AE263",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.25,
   "yaw": -0.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.84
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_836A903D_8819_0F2A_41D0_0B24250C7C06, this.camera_EED03509_FF6C_08DF_41E5_CF5A042C7C9F); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D760483A_89E9_1F29_41B9_6BD44124207D",
   "pitch": -38.84,
   "hfov": 19.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.75
  }
 ],
 "id": "overlay_B847FA8D_8839_13EA_41BE_1647135C645F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.94,
   "yaw": 0.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.53
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2, this.camera_EDE9F6D0_FF6C_094C_41E8_A5C3EC00B846); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7758840_89E9_1F59_41D3_FC5DC5D72BD1",
   "pitch": -13.53,
   "hfov": 15.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.26
  }
 ],
 "id": "overlay_BB842F80_8829_31D9_41CB_EF31BFE1E93A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.89,
   "yaw": 3.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.28
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FACC5_881B_375A_41E0_AE3598C2DC96, this.camera_EDFED6D9_FF6C_097F_41ED_216E2C829F3D); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D7743841_89E9_1F5B_418F_F1532E6854F8",
   "pitch": -7.28,
   "hfov": 10.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.45
  }
 ],
 "id": "overlay_BBAF891E_882F_3EE6_4195_32E16DB05EF7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.45,
   "yaw": 35.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.01
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87, this.camera_ED8D16F9_FF6C_093C_41B1_633B277A7D40); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D774A841_89E9_1F5B_41D3_CA7B720CC8C0",
   "pitch": -7.01,
   "hfov": 7.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 35.92
  }
 ],
 "id": "overlay_BB1E1A74_8829_333A_41BE_E0963839D228",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.33,
   "yaw": -19.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.73
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82635422_8818_F6D9_41D8_128C70754614, this.camera_ED9D9728_FF6C_08DC_41E4_DA06C1F18DF7); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7735841_89E9_1F5B_41D0_6DAB70AE6BCE",
   "pitch": -20.73,
   "hfov": 15.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -19.59
  }
 ],
 "id": "overlay_BD2857D1_882B_117A_41C2_CD942B3D5E17",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC37C1CE_FF6C_0B55_41C4_894550B95384",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.4,
   "yaw": 6.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.11
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_824A89C7_8819_1166_41D8_608468B8A43B, this.camera_EE094427_FF6C_08D4_41E4_35835795EBBD); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D776F840_89E9_1F59_41C4_E7F861CF6D55",
   "pitch": -18.11,
   "hfov": 9.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.09
  }
 ],
 "id": "overlay_B9EA58F9_8827_1F2A_41C4_5FD354134CE6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.39,
   "yaw": -11.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.16
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2, this.camera_EE62E3E9_FF6C_0F5C_41EE_43A79B535AE7); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7756840_89E9_1F59_4191_5B8F6FDEC56E",
   "pitch": -7.16,
   "hfov": 7.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -11.18
  }
 ],
 "id": "overlay_B90B8E73_8827_333F_41DA_124ABB244C44",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.73,
   "yaw": 8.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.41
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87, this.camera_EE77B407_FF6C_08D3_41B4_7C7ABE135E0E); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7751840_89E9_1F59_41B5_758FD0DBF345",
   "pitch": -5.41,
   "hfov": 4.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 8.91
  }
 ],
 "id": "overlay_B9C858DA_8827_3F6E_41DB_664BC0FEF67F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.86,
   "yaw": -152.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.06
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA, this.camera_EE1DB446_FF6C_0954_41ED_CF908A568A9D); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_EF8E0D01_FF6C_38CC_41D1_917E5732C782",
   "pitch": -52.06,
   "hfov": 19.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -152.42
  }
 ],
 "id": "overlay_D138D120_F9B0_89C9_41E9_4A88D0AD29FF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.91,
   "yaw": -95.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.76
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84393379_881F_112B_41DF_BCE0E7FB9E56, this.camera_EC9F78DD_FF6C_1974_41E0_FA62C05A53B3); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7638838_89E9_1F29_41C7_2757C95320CA",
   "pitch": -8.76,
   "hfov": 6.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.01
  }
 ],
 "id": "overlay_A119C49D_881B_37EB_41C8_7FE4721DC68C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.11,
   "yaw": -175.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52, this.camera_ECE9789E_FF6C_19F5_41EF_47B10393853A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7620838_89E9_1F29_41D1_13059AD4E3D0",
   "pitch": -5.77,
   "hfov": 6.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.42
  }
 ],
 "id": "overlay_A16E6980_8818_F1D9_41C4_80ACBBA69451",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.93,
   "yaw": 5.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.57
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA, this.camera_EC89A8CA_FF6C_195C_41E3_5D515E502910); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D762F838_89E9_1F29_41CA_7B6CA4B447BA",
   "pitch": -7.57,
   "hfov": 6.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.82
  }
 ],
 "id": "overlay_A1344B17_8819_72E6_41C9_E25A875E2227",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.69,
   "yaw": 17.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.52
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85D6E643_8819_735E_41E0_2B93A22791B6, this.camera_ECF9A8B5_FF6C_1934_4172_780A841A8C4D); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7616839_89E9_1F2B_41DB_8B6F04917BFE",
   "pitch": -4.52,
   "hfov": 3.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 17.25
  }
 ],
 "id": "overlay_A0715769_881F_312A_41AF_E83B97A9C314",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.68,
   "yaw": 69.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.76
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84080A39_8819_332A_41D4_E05441E9BF55, this.camera_ECAF68F9_FF6C_193C_41ED_774C49EB32B9); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7610839_89E9_1F2B_41C2_628DD1714746",
   "pitch": -5.76,
   "hfov": 5.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 69.95
  }
 ],
 "id": "overlay_A3974E36_881B_3326_41D7_B36639A75A65",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE1DDE3D_FF6C_3937_41EB_2658C14CD091",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.19,
   "yaw": -62.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.1
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9651EF51_8839_117B_41C6_84DBEA210F52, this.camera_EDADF73E_FF6C_1734_41E4_99F720E5960C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75FC831_89E9_1F3B_41DB_C5A11ED4B602",
   "pitch": -2.1,
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -62.33
  }
 ],
 "id": "overlay_9536381C_8827_1EEA_418F_D4C3702416A7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.19,
   "yaw": 5.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.78
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83F43DA9_8819_712B_41B4_52595D130F77, this.camera_EC41979B_FF6C_17F3_41D2_E4AC10C03B2F); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75F8831_89E9_1F3B_41D7_C0AAD0AA5807",
   "pitch": -1.78,
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.61
  }
 ],
 "id": "overlay_9536181C_8827_1EEA_41D7_B5C5C14C0B14",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -157.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.65
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84097F44_8819_1159_41AC_A24AD754426D, this.camera_EDA3975D_FF6C_1774_41DD_15ACD5E12028); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75E5831_89E9_1F3B_41D1_FE02B083CF7C",
   "pitch": -7.65,
   "hfov": 6.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -157.39
  }
 ],
 "id": "overlay_9536681C_8827_1EEA_41D6_2E0F4C6FF2AF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.01,
   "yaw": -145.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.21
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE, this.camera_EC5197B1_FF6C_17CF_41B1_5F441A1F8A81); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75EE831_89E9_1F3B_41C6_680F43A2572A",
   "pitch": -5.21,
   "hfov": 7.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -145.98
  }
 ],
 "id": "overlay_9536781C_8827_1EEA_41D7_AACE99C4F779",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.01,
   "yaw": 174.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.37
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84010084_8819_0FD9_41E0_C15DD5732686, this.camera_EDB3A77C_FF6C_1734_41E4_4B414419B3F3); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D75E8832_89E9_1F39_41D1_BB10D2BD01E4",
   "pitch": -5.37,
   "hfov": 7.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 174.19
  }
 ],
 "id": "overlay_9536A81C_8827_1EEA_41D2_5B14FBFBA6C3",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EED50EA2_FF6C_39CC_41D2_A6FE6B0683AE",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC0621A1_FF6C_0BCF_41B6_61D22CB44437",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EC3A986C_FF6C_1954_41E3_9F5AD5B40EF2",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECE551F7_FF6C_0B34_41E4_F7BBBFDA100E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE30A4B4_FF6C_0935_41E6_413AC037C08D",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED517F79_FF6C_373F_41BF_21E226F74461",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.31,
   "yaw": -74.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_1_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.18
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826A6B02_881B_12DE_41CA_89AC113E404C, this.camera_EB0302A2_FF6C_09CC_41EE_C38BBD5558DD); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77C3846_89E9_1F59_41D5_D8748CC14AEF",
   "pitch": -28.18,
   "hfov": 18.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -74.97
  }
 ],
 "id": "overlay_C8A0E6C2_8879_735E_41A4_FF3C1193BAD7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.48,
   "yaw": -20.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.98
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82623EF2_881B_133E_41D7_F5E60A69931B, this.camera_EF9E22FD_FF6C_0937_41E3_AAB4D89E4F12); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77CA846_89E9_1F59_41A2_BF3F75BB16B5",
   "pitch": -10.98,
   "hfov": 14.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.03
  }
 ],
 "id": "overlay_C81EE320_8879_32DA_41D6_93D69C0B9C95",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.85,
   "yaw": 139.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.9
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8263654E_8819_1166_41D1_2CCB9E1131E2, this.camera_EF9A9310_FF6C_08CC_41E6_59389AA46113); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77B2846_89E9_1F59_41D1_156F91450B65",
   "pitch": -10.9,
   "hfov": 18.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 139.63
  }
 ],
 "id": "overlay_C9D4A7E3_8879_115E_41DD_50A1C45DED04",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.06,
   "yaw": -77.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.48
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE, this.camera_EB0D4286_FF6C_09D4_41BE_777FF70E70A9); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77BA847_89E9_1F67_41C1_4BAB9C850AC6",
   "pitch": -18.48,
   "hfov": 11.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.87
  }
 ],
 "id": "overlay_D91EC0D8_881F_0F69_41C6_8C9928031612",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED2B1023_FF6C_08CC_41DD_9D21ADB0A0E1",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ED4A85CC_FF6C_0B55_41EA_D97C757AAFCD",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EFB9C366_FF6C_0F54_41E9_325FFE6AC7D9",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE31DE7C_FF6C_3934_41EF_A46B6B9F4834",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EE0F4E3D_FF6C_3937_41C8_FECA090DD4B8",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.49,
   "yaw": -120.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.33
  }
 ],
 "data": {
  "label": "Circle Arrow 05 Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84058082_8819_0FDE_41AD_F27316848255, this.camera_EE170455_FF6C_0977_41E3_3F729C259645); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D77EF845_89E9_1F5B_41BF_0E71FD5EB281",
   "pitch": -19.33,
   "hfov": 17.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -120.42
  }
 ],
 "id": "overlay_B6E6EB59_887B_316A_41D9_62BDB1AC380C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.97,
   "yaw": 62.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_1_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.79
  }
 ],
 "data": {
  "label": "Circle Point 01c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87, this.camera_EE2B2480_FF6C_09CC_41EF_7C7E28A5E6EB); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D77E8845_89E9_1F5B_41BB_D5BA6855F1E1",
   "pitch": -13.79,
   "hfov": 11.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 62.32
  }
 ],
 "id": "overlay_B69C5294_8879_73FA_418A_5BA2739B3AF3",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_EEAC9F15_FF6C_38F4_4165_8F2938394644",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECE9489E_FF6C_19F5_41E7_C4DAC0C9D7B3",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 2.66
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 2.66
  }
 ],
 "id": "sequence_ECBD3905_FF6C_18D7_41ED_4B8ECFF471FF",
 "restartMovementOnUserInteraction": false
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D768183E_89E9_1F29_41C5_77D7DA19D48D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D768983E_89E9_1F29_41D7_BB2E8BC6F48E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840627F6_8819_1126_41D8_593CAA163830_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D777383E_89E9_1F29_41C9_1E2A3141E363",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75AB834_89E9_1F39_41D9_A36DDFDD3A58",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7594834_89E9_1F39_4196_FFE1B6B5E5F3",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D759E834_89E9_1F39_41D8_01BD2D86F7DB",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F09F55_8819_117A_41C8_5EE5232FB520_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7598834_89E9_1F39_41C3_902EF39B6F34",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77D1845_89E9_1F5B_41A0_B3AC0F507429",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_82623EF2_881B_133E_41D7_F5E60A69931B_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77D8846_89E9_1F59_41D3_4BB063DBD354",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7718844_89E9_1F59_41E1_01C11CC1E7EC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D770E844_89E9_1F59_41D3_E79B4D880F0B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7708844_89E9_1F59_41E0_CE4CB95A340B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77F2844_89E9_1F59_41A9_BFFF244616C2",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77FA844_89E9_1F59_41A6_0952381A6586",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_82635422_8818_F6D9_41D8_128C70754614_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77E5845_89E9_1F5B_41D5_3709BC23D69A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EFFA0CDB_FF6C_3973_41DF_54293850757E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EFF54CDB_FF6C_3973_41B8_A8C4B395B5BC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EFF56CDB_FF6C_3973_41E5_6DA965F2BE0D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EFF53CDB_FF6C_3973_41ED_4860AB79E1EA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EFF4DCDB_FF6C_3973_41E8_E732073045AC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EFF4ECDB_FF6C_3973_41BC_0586F66CB70C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_85D6E643_8819_735E_41E0_2B93A22791B6_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EFF48CEB_FF6C_395C_41ED_437DD197321F",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7650837_89E9_1F27_41DA_4020B8809C14",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D765A837_89E9_1F27_41B9_C9CCCBE797DC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7642837_89E9_1F27_41B0_5FC707B53EEC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7641837_89E9_1F27_41D9_18CBA5F7F3CE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840881D9_8818_F16B_41DD_F6337A8F4CEE_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D764B837_89E9_1F27_41D7_530E8E0BECE6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76FC83B_89E9_1F2F_41D7_0E0A3C0EDE6A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8406D831_881F_1F3B_41C0_438B574CC920_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D76E683B_89E9_1F2F_41B8_31601C0E75B9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7729842_89E9_1F59_41C8_ED49ECB8186A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7710842_89E9_1F59_41DA_A623F3CE5423",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D771D843_89E9_1F5F_41C9_BC1C2BEB31AA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7704843_89E9_1F5F_41D0_82FB19DEEE0B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D770C843_89E9_1F5F_41CF_8706E08FCEF9",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8263654E_8819_1166_41D1_2CCB9E1131E2_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7709843_89E9_1F5F_41D1_47E9F19DE095",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76DC83C_89E9_1F29_41DF_C8A3F84C3190",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76C783C_89E9_1F29_41CE_26E53F8BF8D1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8430CEEA_881F_3329_41B1_241573C33BA1_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76CE83C_89E9_1F29_41DB_61105BF28D65",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D751082F_89E9_1F27_41CF_C07C653AEBCF",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D751D82F_89E9_1F27_41C8_9534E580C546",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D750782F_89E9_1F27_41AA_B84DD4DD589B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7502830_89E9_1F39_41DF_9A9EC3D49AFD",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9651EF51_8839_117B_41C6_84DBEA210F52_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D750C830_89E9_1F39_41BF_74D505252831",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76E383B_89E9_1F2F_41DF_B3F766ED57DE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76EB83B_89E9_1F2F_41D0_AA596AFF3924",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_849E8D57_881F_1166_41BF_F21EB4F8D19E_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76D283B_89E9_1F2F_41CE_E9EFD732F6DE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D777483F_89E9_1F27_41E0_DC3CD9E7C75B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8430DB27_8819_1127_41D1_76C0382FB641_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D777C83F_89E9_1F27_41C0_0AB26DEDA7B4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7584835_89E9_1F3B_41DE_AAD762B84441",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D758E835_89E9_1F3B_41AE_F32073D7F828",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7588835_89E9_1F3B_41DA_3A108E2FAD26",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7675835_89E9_1F3B_41C6_A3A2AABDBAAB",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_83F43DA9_8819_712B_41B4_52595D130F77_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7599835_89E9_1F3B_41DC_FDDCE03035BA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75E5830_89E9_1F39_41DA_65ABDB5977BE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7508831_89E9_1F3B_41C1_813D6A2770B1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84003BE9_8819_112B_41B2_62A7DE60CEE4_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75F5831_89E9_1F3B_41DF_060639A74DFF",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75D5832_89E9_1F39_41BE_DA8434803A82",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75DE832_89E9_1F39_41CF_879066A9C2C4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75D8832_89E9_1F39_419B_DD9AD4CF3B27",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75C5832_89E9_1F39_41DD_787A7D8B3526",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84097F44_8819_1159_41AC_A24AD754426D_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75CC833_89E9_1F3F_41C1_C74A506E5B9F",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7766840_89E9_1F59_41D6_BB9128C03981",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_843C7CA0_8819_37DA_41DB_D7CE16741A4D_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_84D056BB_8BAC_48B7_41BC_65DE43DD7878",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D76BD83D_89E9_1F2B_41D4_1A00C99E8E9F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76A783D_89E9_1F2B_41E0_480E0737E2D3",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8436733A_8819_112E_41D3_781CB6DC8810_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_D76AE83D_89E9_1F2B_41D0_618A39A57DFF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7632838_89E9_1F29_41B3_339EB11A9DD6",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84393379_881F_112B_41DF_BCE0E7FB9E56_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D763C838_89E9_1F29_41CB_E70C78C30BD9",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D76A883D_89E9_1F2B_41D6_EAA8C26D0B86",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D769383D_89E9_1F2B_41C1_67DCF3993939",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D769D83E_89E9_1F29_41D7_077D0D45C34D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8438D6BA_8819_332E_41B1_DCFA4B2E040C_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_B0A76369_A06E_7FC8_41C5_B24AE42D4BDA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7673836_89E9_1F39_41D0_08A8203754FA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D767D836_89E9_1F39_41A8_1F2EECBC3DBA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7666836_89E9_1F39_41D1_380E4016180C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7662836_89E9_1F39_41D7_B203B8F66DB2",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D766D836_89E9_1F39_41E0_D139471EBFFC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84010084_8819_0FD9_41E0_C15DD5732686_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7656837_89E9_1F27_41D3_26A3380F5444",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7580835_89E9_1F3B_41DF_34DFEA98587D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D758C836_89E9_1F39_41D8_4CD52F5418CC",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8401EF6D_8819_112B_41CA_4E8E5840228F_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7589836_89E9_1F39_41CA_7D934EF97977",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77A6847_89E9_1F67_41AC_EB084F0EEEC5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77AE847_89E9_1F67_41D6_7625643C8722",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826A6B02_881B_12DE_41CA_89AC113E404C_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77A9847_89E9_1F67_41DE_34AD4CD1FBCE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D76CB83C_89E9_1F29_41D5_2CA844179B8C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_842D5078_881F_0F29_41D0_E002DB468D4B_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D76B283C_89E9_1F29_41D1_3C1F7346674F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D773C841_89E9_1F5B_41DB_83620A320B6C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7726842_89E9_1F59_41B2_7C21DC9F9F73",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826FC7C6_8819_3166_41DF_C1ACF0E2CF87_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7721842_89E9_1F59_41D7_6533060D8D6D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D760183A_89E9_1F29_419A_F4C1F69B536C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D760B83A_89E9_1F29_41C5_9E8DEDEC8BBD",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8417C642_881F_7359_41D3_634DA2A8F5BF_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D76F783A_89E9_1F29_41CC_74B5F63E78CE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75F7830_89E9_1F39_41B2_FB0F32A4739E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75F3830_89E9_1F39_41D5_FE21E6FDAC08",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84080A39_8819_332A_41D4_E05441E9BF55_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75FA830_89E9_1F39_41D6_FC17DD22699A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75B6833_89E9_1F3F_41C4_92D788307875",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75B2833_89E9_1F3F_41C3_50E1FCC97287",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75BC833_89E9_1F3F_41D8_5D7F34A9E7B3",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75B9833_89E9_1F3F_41CD_33C154F70BCD",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_84058082_8819_0FDE_41AD_F27316848255_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_D75A0834_89E9_1F39_41C5_FDBCA5E154B5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D768483F_89E9_1F27_41DF_0B1E7D7C5A2A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8623B92F_8819_F127_4193_EB189FF61F98_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 840
  }
 ],
 "id": "AnimatedImageResource_D768D83F_89E9_1F27_41DD_CC762A2786A3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D761D839_89E9_1F2B_41C4_FD3E6880D72B",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7606839_89E9_1F2B_41CD_9C5923921C19",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7603839_89E9_1F2B_41E1_02202DAF44B1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7617839_89E9_1F2B_41D5_E441BAE7CC12",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D761183A_89E9_1F29_41C2_386C29E824FB",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D761A83A_89E9_1F29_41E1_0D191312742D",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_841B04D0_881F_1779_41D7_9AB4F4F20FAA_1_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D760483A_89E9_1F29_41B9_6BD44124207D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7758840_89E9_1F59_41D3_FC5DC5D72BD1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_D7743841_89E9_1F5B_418F_F1532E6854F8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D774A841_89E9_1F5B_41D3_CA7B720CC8C0",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_824A89C7_8819_1166_41D8_608468B8A43B_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7735841_89E9_1F5B_41D0_6DAB70AE6BCE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D776F840_89E9_1F59_41C4_E7F861CF6D55",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7756840_89E9_1F59_4191_5B8F6FDEC56E",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7751840_89E9_1F59_41B5_758FD0DBF345",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_836A903D_8819_0F2A_41D0_0B24250C7C06_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EF8E0D01_FF6C_38CC_41D1_917E5732C782",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7638838_89E9_1F29_41C7_2757C95320CA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7620838_89E9_1F29_41D1_13059AD4E3D0",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D762F838_89E9_1F29_41CA_7B6CA4B447BA",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7616839_89E9_1F2B_41DB_8B6F04917BFE",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_840A1492_881F_37FE_41E0_470C2F837010_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D7610839_89E9_1F2B_41C2_628DD1714746",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75FC831_89E9_1F3B_41DB_C5A11ED4B602",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75F8831_89E9_1F3B_41D7_C0AAD0AA5807",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75E5831_89E9_1F3B_41D1_FE02B083CF7C",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75EE831_89E9_1F3B_41C6_680F43A2572A",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9536281B_8827_1EEE_41DB_8AF37D6B5AF6_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D75E8832_89E9_1F39_41D1_BB10D2BD01E4",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77C3846_89E9_1F59_41D5_D8748CC14AEF",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77CA846_89E9_1F59_41A2_BF3F75BB16B5",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77B2846_89E9_1F59_41D1_156F91450B65",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826FACC5_881B_375A_41E0_AE3598C2DC96_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_D77BA847_89E9_1F67_41C1_4BAB9C850AC6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D77EF845_89E9_1F5B_41BF_0E71FD5EB281",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_826AE27A_881B_1329_41D6_0A4A14CF63E4_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_D77E8845_89E9_1F5B_41BB_D5BA6855F1E1",
 "rowCount": 6,
 "frameCount": 22
}],
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "desktopMipmappingEnabled": false,
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "class": "Player",
 "contentOpaque": false,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "data": {
  "name": "Player480"
 },
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
