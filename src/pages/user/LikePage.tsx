import { useEffect, useState } from "react";
import UserTitle from "../../components/user/UserTitle";
import { check } from "../../lib/API/userAPI";
import styled from "styled-components";

import UserLikeList from "../../components/user/UserLikeList";

interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  tags: string[];
  thumbnail: string | null;
  photo: string | null;
  isSoldOut: boolean;
  discountRate: number;
}

function LikePage() {
  // 초기값 렌더링
  useEffect(() => {
    // getProducts();
    getLike();
    getCart();
  }, []);

  // const [products, setProducts] = useState([]);
  const [likes, setLikes] = useState<IProduct[]>([]);
  const [carts, setCarts] = useState<IProduct[]>([]);

  // 찜 목록을 로컬 스토리지에서 받아옴
  const getLike = async () => {
    const res = await check();
    const getLikeItems = localStorage.getItem(`like_${res.email}`);
    if (getLikeItems) {
      setLikes(JSON.parse(getLikeItems));
    }
  };

  // 장바구니 목록을 로컬스토리지에서 받아옴
  const getCart = async () => {
    const res = await check();
    const getCartItems = localStorage.getItem(`cart_${res.email}`);
    if (getCartItems) {
      setCarts(JSON.parse(getCartItems));
    }
  };

  return (
    <LikeRoute>
      <UserTitle>찜한 상품</UserTitle>
      <UserLikeList
        likes={likes}
        carts={carts}
        setLikes={setLikes}
        setCarts={setCarts}
      />
    </LikeRoute>
  );
}

const LikeRoute = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default LikePage;
