import { Card } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { myStore } from "../store/Store";

export const PriceContent: React.FC = observer(() => {
  const totalValue = myStore.resultPrice < 0 ? "0" : myStore.resultPrice;
  return (
    <Card
      mode="shadow"
      style={{
        position: "fixed",
        top: "100px",
        right: "150px",
        width: 200,
        height: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >{`Итого: ${totalValue}$`}</Card>
  );
});
