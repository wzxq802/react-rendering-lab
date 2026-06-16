import { ITEM_PRIORITIES, ITEM_STATUSES, type Item } from "../types/item";

function generateItems(count: number): Item[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
    description: `Description for item ${index + 1}`,
    status: ITEM_STATUSES[Math.floor(Math.random() * ITEM_STATUSES.length)],
    priority: ITEM_PRIORITIES[Math.floor(Math.random() * ITEM_PRIORITIES.length)],
    createdAt: new Date().toISOString(),
  }))
}
export const MOCK_ITEMS = generateItems(5000)
