import { AiOutlineBarChart } from 'react-icons/ai';
import { LuSettings } from 'react-icons/lu';
import { MdOutlineDashboard } from 'react-icons/md';
import { BiLineChart } from 'react-icons/bi';
import { IoMdBook } from 'react-icons/io';

export const instruments = ['Forex', 'Crypto', 'Stocks', 'Futures'];
export const timeFrames = ['1 Day', '1 Week', '1 Month', '3 Month', '1 Year'];

export const NavItems = [
  { label: 'Dashboard', path: '/dashboard', icon: MdOutlineDashboard },
  { label: 'Market watch', path: '/market watch', icon: BiLineChart },
  { label: 'Trade Journal', path: '/trade journal', icon: IoMdBook },
  { label: 'Analytics', path: '/analytics', icon: AiOutlineBarChart },
  { label: 'Settings', path: '/settings', icon: LuSettings },
];
