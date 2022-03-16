import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function MainMap() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | undefined>(undefined);
  const [zoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    if (!mapContainer.current) return;

    const mapboxMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [2.748, 51.1284],
      zoom: zoom,
    });
    map.current = mapboxMap;

    mapboxMap.once("load", () => {
      mapboxMap.addLayer(
        {
          id: "openseamap",
          type: "raster",
          source: {
            type: "raster",
            tiles: ["https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"],
            tileSize: 256,
          },
          minzoom: 0,
          maxzoom: 22,
          paint: {
            "raster-opacity": 0.8,
          },
        },
        "waterway-label"
      );
    });
  });

  return <div ref={mapContainer} className="map-container h-screen" />;
}
