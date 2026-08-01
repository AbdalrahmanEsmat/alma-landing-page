// i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Wraps Next.js navigation APIs so they're locale-aware
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
