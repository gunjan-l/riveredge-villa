import { describe, it, expect } from 'vitest';
import { GET } from '../pages/robots.txt';

describe('robots.txt endpoint', () => {
  it('generates robots.txt with allow directive and sitemap URL', async () => {
    const mockContext = {
      site: new URL('https://riveredgevilla.com'),
    } as any;

    const response = await GET(mockContext);
    const text = await response.text();

    expect(response.headers.get('Content-Type')).toBe('text/plain; charset=utf-8');
    expect(text).toContain('User-agent: *');
    expect(text).toContain('Allow: /');
    expect(text).toContain('Sitemap: https://riveredgevilla.com/sitemap-index.xml');
  });
});
