// รูปแบบข้อมูลสินค้าและสินค้าในตะกร้า
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  amount: number;
}
