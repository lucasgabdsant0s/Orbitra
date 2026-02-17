import type { ICacheProvider } from '../../core/interfaces/providers/ICacheProvider.js';
interface CacheItem<T> {
  value: T;
  expiresAt: number;
}
export class InMemoryCacheProvider implements ICacheProvider {
  private cache = new Map<string, CacheItem<any>>();
  get<T>(key: string): T | undefined {
    const item = this.cache.get(key);
    if (!item) return undefined;
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }
    return item.value;
  }
  set<T>(key: string, value: T, ttlSeconds: number): void {
    this.cache.set(key, {
      value,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }
  delete(key: string): void {
    this.cache.delete(key);
  }
  invalidatePattern(pattern: string): void {
    const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\\*/g, '.*');
    const regex = new RegExp(`^${escapedPattern}$`);
    for (const key of this.cache.keys()) {
      if (regex.test(key)) {
        this.cache.delete(key);
      }
    }
  }
}
