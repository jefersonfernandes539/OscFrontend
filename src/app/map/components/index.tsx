"use client";

import React, { useId } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { OngLocation } from "@/app/types/ongLocation";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })
  ._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

type MapCardProps = {
  filteredOngs: OngLocation[];
  setSelectedOng: React.Dispatch<React.SetStateAction<OngLocation | null>>;
};

const MapCard: React.FC<MapCardProps> = ({ filteredOngs, setSelectedOng }) => {
  const uniqueKey = useId();

  return (
    <Card className="col-span-1 min-w-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Mapa Interativo</CardTitle>
        <CardDescription className="font-semibold">
          Clique nos marcadores para ver detalhes das ONGs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <MapContainer
          key={uniqueKey}
          center={[-3.71839, -38.5434]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "400px", width: "100%", borderRadius: "0.5rem" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredOngs.map((ong) => (
            <Marker
              key={ong.id}
              position={[ong.latitude, ong.longitude]}
              eventHandlers={{
                click: () => setSelectedOng(ong),
              }}
            >
              <Popup>
                <strong>{ong.name}</strong>
                <br />
                {ong.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </CardContent>
    </Card>
  );
};

export default MapCard;
