import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해놓기
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}
