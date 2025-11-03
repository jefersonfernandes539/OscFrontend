"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/ui/select";
import { Badge } from "@/ui/badge";

const serviceOptions = [
  "Alimentação",
  "Moradia",
  "Saúde",
  "Educação",
  "Capacitação",
  "Jurídico",
];

export default function CadastroOngPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    latitude: "",
    longitude: "",
    address: "",
    phone: "",
    email: "",
    type: "",
    services: [] as string[],
  });

  const [loading, setLoading] = useState(false);

  // Função genérica para atualizar campos
  const handleChange = (field: string, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Salvar no Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.latitude || !form.longitude) {
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("OngLocation").insert([
      {
        name: form.name,
        description: form.description,
        latitude: Number(form.latitude),
        longitude: Number(form.longitude),
        address: form.address,
        phone: form.phone,
        email: form.email,
        type: form.type,
        services: form.services,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Erro ao salvar ONG:", error);
    } else {
      router.push("/mapa"); // redireciona de volta ao mapa
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Cadastrar Nova ONG</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div>
                <Label>Nome da ONG *</Label>
                <Input
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Ex: Associação Esperança"
                />
              </div>

              {/* Descrição */}
              <div>
                <Label>Descrição</Label>
                <Textarea
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Descreva brevemente os serviços oferecidos..."
                />
              </div>

              {/* Tipo */}
              <div>
                <Label>Tipo de Serviço Principal</Label>
                <Select
                  value={form.type}
                  onValueChange={(v) => handleChange("type", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Serviços múltiplos */}
              <div>
                <Label>Serviços Oferecidos</Label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((service) => (
                    <Badge
                      key={service}
                      className={`cursor-pointer ${
                        form.services.includes(service)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => {
                        const already = form.services.includes(service);
                        const newList = already
                          ? form.services.filter((s) => s !== service)
                          : [...form.services, service];
                        handleChange("services", newList);
                      }}
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Localização */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Latitude *</Label>
                  <Input
                    type="number"
                    step="any"
                    value={form.latitude}
                    onChange={(e) => handleChange("latitude", e.target.value)}
                    placeholder="-23.5505"
                  />
                </div>
                <div>
                  <Label>Longitude *</Label>
                  <Input
                    type="number"
                    step="any"
                    value={form.longitude}
                    onChange={(e) => handleChange("longitude", e.target.value)}
                    placeholder="-46.6333"
                  />
                </div>
              </div>

              {/* Endereço e Contatos */}
              <div>
                <Label>Endereço</Label>
                <Input
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Rua Exemplo, 123 - Bairro"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Telefone</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <Label>E-mail</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="contato@ong.org"
                  />
                </div>
              </div>

              {/* Botão */}
              <div className="pt-4">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Salvando..." : "Cadastrar ONG"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
