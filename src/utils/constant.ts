import { AiOutlineBarChart } from 'react-icons/ai';
import { LuSettings } from 'react-icons/lu';
import { MdOutlineDashboard } from 'react-icons/md';
import { BiLineChart } from 'react-icons/bi';
import { IoMdBook } from 'react-icons/io';

export const instruments = ['Forex', 'Crypto', 'Stocks', 'Futures'];

export const timeFrames = [
  { label: '1 Day', symbol: 'D' },
  { label: '1 Week', symbol: 'w' },
  { label: '1 Month', symbol: '1M' },
  { label: '3 Month', symbol: '3M' },
  { label: '1 Year', symbol: '1Y' },
];

export const NavItems = [
  { label: 'Dashboard', path: '/dashboard', icon: MdOutlineDashboard },
  { label: 'Market watch', path: '/market watch', icon: BiLineChart },
  { label: 'Trade Journal', path: '/trade journal', icon: IoMdBook },
  { label: 'Analytics', path: '/analytics', icon: AiOutlineBarChart },
  { label: 'Settings', path: '/settings', icon: LuSettings },
];
export const direction = ['long', 'short'];

export const results = ['win', 'loss', 'breakeven'];
