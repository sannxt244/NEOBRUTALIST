import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Button>Click me</Button>
      <Card>Hêllo</Card>
      <Input />
    </div>
  );
}
