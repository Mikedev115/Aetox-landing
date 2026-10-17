export type Supporter =
  | {
      name: string;
      amount: number | null;
      supportedOn?: string;
    }
  | {
      anonymous: true;
      amount: number | null;
      supportedOn?: string;
    };

// Add confirmed contributions here. The total on the supporters page is derived
// from this list, while supporter names are shown without individual amounts.
export const SUPPORTERS: readonly Supporter[] = [
  {
    name: "ณัฐพล ส****",
    amount: 500,
    supportedOn: "2026-10-16",
  },
  {
    name: "เจษฎา ว***",
    amount: 499,
    supportedOn: "2026-10-08",
  },
  {
    name: "ปริญญา n***",
    amount: 500,
    supportedOn: "2026-10-06",
  },
  {
    name: "วสุ แก้****",
    amount: 500,
    supportedOn: "2026-10-01",
  },
  {
    name: "สุภิพงษ์ จัน****",
    amount: 100,
    supportedOn: "2026-10-01",
  },
  {
    name: "กิตติภณ สุข****",
    amount: 200,
    supportedOn: "2026-09-15",
  },
  {
    name: "คุณบี MP",
    amount: 300,
    supportedOn: "2026-09-15",
  },
  {
    name: "Andrew Warodom",
    amount: 2123.45,
    supportedOn: "2026-09-14",
  },
  {
    name: "พรรณเชษฐ์ ไชยชมภู",
    amount: 500,
    supportedOn: "2026-09-13",
  },
  {
    name: "ไพโรจน์ BUGpairoj",
    amount: 2000,
    supportedOn: "2026-09-11",
  },
];

export const supportTotal = SUPPORTERS.reduce(
  (total, supporter) => total + (supporter.amount ?? 0),
  0,
);
