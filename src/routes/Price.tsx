import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Overview = styled.main`
  width: 100%;
  height: 50px;
  color: ${(props) => props.theme.bgColor};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Tag = styled.span`
  width: 50%;
  color: block;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

const Value = styled.div`
  width: 50%;
`;

const Text = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
interface PriceProps {
  coinId: string;
  tickersData?: PriceData;
}
function checkValue(value: number | undefined) {
  if (value) {
    return value > 0;
  }
}
function Price({ coinId, tickersData }: PriceProps) {
  const [data, setData] = useState<PriceData>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setData(tickersData);
    setLoading(false);
  }, [coinId, tickersData]);

  return (
    <Container>
      {loading ? (
        "Loading Price..."
      ) : (
        <>
          <Overview>
            <Tag>Price :</Tag>
            <Value>
              <Text>
                $ {data?.quotes.USD.price.toFixed(3)}
              </Text>
            </Value>
          </Overview>
          <Overview>
            <Tag> Max Change rate in last 24h:</Tag>
            <Value>
              <Text>
                {data?.quotes.USD.market_cap_change_24h} %
              </Text>
            </Value>
          </Overview>

          <Overview>
            <Tag> Change rate (last 30 Minutes):</Tag>
            <Value>
              <Text>
                {data?.quotes.USD.percent_change_30m} %
              </Text>
            </Value>
          </Overview>

          <Overview>
            <Tag> Change rate (last 1 hours):</Tag>
            <Value>
              <Text>
                {data?.quotes.USD.percent_change_1h} %
              </Text>
            </Value>
          </Overview>

          <Overview>
            <Tag> Change rate (last 12 hours):</Tag>
            <Value>
              <Text>
                {data?.quotes.USD.percent_change_12h} %
              </Text>
            </Value>
          </Overview>

          <Overview>
            <Tag> Change rate (last 24 hours):</Tag>
            <Value>
              <Text>
                {data?.quotes.USD.percent_change_24h} %
              </Text>
            </Value>
          </Overview>
        </>
      )}
    </Container>
  );
}

export default Price;