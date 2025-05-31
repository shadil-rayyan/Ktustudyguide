// app/explorer/page.tsx
import { redirect } from 'next/navigation';

export default function ExplorerRoot() {
  redirect('/explorer/s1'); // change to your preferred default start folder
}
