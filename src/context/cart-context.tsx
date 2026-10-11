import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/lib/data";

export type CartLine = {
  product: Product;
  quantity: number;
  shade: string;
  width: string;
  hardware: string;
};

type CartContextValue = {
  items: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, options?: Partial<CartLine>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  subtotal: number;
  itemCount: number;
  isGift: boolean;
  setIsGift: (v: boolean) => void;
  giftMessage: string;
  setGiftMessage: (v: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const FREE_SHIPPING_THRESHOLD = 100;
const PACKAGING_THRESHOLD = 100;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([
    {
      product: products[0],
      quantity: 1,
      shade: "Royal Violet",
      width: "Standard Couture",
      hardware: "Zero-Pinch Titanium Armature",
    },
    {
      product: products[1],
      quantity: 1,
      shade: "Blush",
      width: "Standard",
      hardware: "Silk Tail",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");

  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.product.price * i.quantity, 0),
    [items],
  );
  const itemCount = useMemo(
    () => items.reduce((s, i) => s + i.quantity, 0),
    [items],
  );

  const addItem = useCallback(
    (product: Product, options?: Partial<CartLine>) => {
      setItems((prev) => {
        const existing = prev.find((l) => l.product.id === product.id);
        if (existing) {
          return prev.map((l) =>
            l.product.id === product.id
              ? { ...l, quantity: l.quantity + 1 }
              : l,
          );
        }
        return [
          ...prev,
          {
            product,
            quantity: 1,
            shade: product.colors[0]?.name ?? "Default",
            width: "Standard Couture",
            hardware: "Zero-Pinch Titanium Armature",
            ...options,
          },
        ];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((l) => l.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((l) =>
        l.product.id === productId ? { ...l, quantity } : l,
      ),
    );
  }, []);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      updateQuantity,
      subtotal,
      itemCount,
      isGift,
      setIsGift,
      giftMessage,
      setGiftMessage,
    }),
    [
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      subtotal,
      itemCount,
      isGift,
      giftMessage,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export { FREE_SHIPPING_THRESHOLD, PACKAGING_THRESHOLD };
