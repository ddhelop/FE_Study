import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #변수의 타입 적는곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      $: {
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "좋아",
          price: 3000,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
