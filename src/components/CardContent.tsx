import { Icon20Add, Icon20MinusOutline, Icon28Delete } from "@vkontakte/icons";
import { Div, ContentCard, Button } from "@vkontakte/vkui";
import { Order } from "moduleTypes";
import React, { Fragment,  useEffect, useState } from "react";
import { myStore } from "../store/Store";
import { observer } from "mobx-react";

interface Props {
  data: Order;
}
export const CardContent: React.FC<Props> = observer(({ data }) => {
  const [countOrder, setCountOrder] = useState<number>(1);
  const intPrice: number = Math.floor(data.price);
  const incrementOrder = () => {
    if (countOrder < 10) {
      setCountOrder((prevCount) => prevCount + 1);
      myStore.incrementPrice(intPrice);
    }
  };
  useEffect(() => {
    myStore.incrementPrice(intPrice);
  }, []);


  const deleteOrder = ()=>{
    const priceOrdersCards = Math.floor(intPrice * countOrder);
    myStore.decrementPrice(priceOrdersCards)
    const updateCards = myStore.orders.filter((item) => item.id !== data.id);
    myStore.setOrders(updateCards);
  }
  const decrementOrder = () => {
    if (countOrder > 1) {
      setCountOrder((prevCount) => prevCount - 1);
      myStore.decrementPrice(intPrice);
    }
  };

  return (
    <Fragment key={data.id}>
      <Div style={{marginLeft:300}}>
        <ContentCard
          style={{ width: "40%" }}
          onClick={() => {}}
          src={data.image}
          subtitle={ data.title}
          header={`Цена: ${data.price}$`}
          text={data.description}
          caption={`Рейтинг: ${data.rating.rate},  в колличестве ${data.rating.count} экземпляров`}
          maxHeight={550}
        />

        <div style={{ margin: "10px 0", display: "flex", width: "40%" }}>
          <Button
            mode="secondary"
            onClick={incrementOrder}
            style={{ margin: "0 10px 0 0" }}
          >
            <Icon20Add />
          </Button>
          {countOrder}
          <Button
            mode="secondary"
            style={{ margin: "0 10px" }}
            onClick={decrementOrder}
          >
            <Icon20MinusOutline />
          </Button>
          <Icon28Delete style={{ margin: " 0 0 0 auto" }} onClick={deleteOrder} />
        </div>
      
      </Div>
    </Fragment>
  );
});
