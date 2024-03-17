import { FC, useEffect, useState } from "react";
import {
  CardGrid,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Spacing,
  Spinner,
  View,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { getOrders } from "../api/api";
import { Order } from "moduleTypes";
import { myStore } from "../store/Store";
import { CardContent } from "../components/CardContent";
import { PriceContent } from "../components/PriceContent";
import { observer } from "mobx-react";

export const BasketOrders: FC<NavIdProps> = observer(({ id }) => {
  const routeNavigator = useRouteNavigator();
  const [isLoading, setIsLoading] = useState<boolean>(false);
 
  useEffect(() => {
    setIsLoading(true);
    getOrders()
      .then((data: Order[]) => {
        setIsLoading(false);
        myStore.setOrders(data);
      })
      .catch((err) => {
        setIsLoading(true);
        console.error(err);
      });
  }, []);

  return isLoading ? (
    <Spinner size="large" style={{ margin: "20px 0" }} />
  ) : (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Корзина
      </PanelHeader>
      <View activePanel="card">
        <Panel id="card">
          <Group description="Внутри Group" style={{ display: "flex" }}>
            <CardGrid
              size="s"
              style={{
                display: "grid",
                gridTemplateColumns: " repeat(1, 1fr)",
                gridTemplateRows: "repeat(10, auto)",
                gap: "10px",
              }}
            >
              {myStore.orders.map((item) => (
                <CardContent data={item} key={item.id} />
              ))}
            </CardGrid>
            <PriceContent />
          </Group>
          <Spacing size={16} />
        </Panel>
      </View>
    </Panel>
  );
});
