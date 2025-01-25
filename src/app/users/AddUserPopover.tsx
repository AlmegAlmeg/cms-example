'use client';

import { Button } from '@/components/ui/button';
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Edit, Sheet, Trash } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserDetails } from './UserDetails';

export function AddUserPopover() {
  const tabs = ['כללי', 'הודעות', 'לוגים', 'הזמנות', 'פניות'];
  return (
    <SheetContent side="left">
      <SheetHeader className="flex justify-between items-center flex-row">
        <SheetTitle className="text-3xl text-right">כרטיס לקוח</SheetTitle>

        <div className="flex ">
          <Button variant="ghost">
            <Trash />
          </Button>
          <Button variant="ghost">
            <Sheet />
          </Button>
          <Button variant="ghost">
            <Edit />
          </Button>
        </div>
      </SheetHeader>

      <Tabs defaultValue="כללי" dir="rtl" className="my-4">
        <TabsList className="w-full">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab.toLowerCase()}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="כללי">
          <UserDetails />
        </TabsContent>
      </Tabs>
    </SheetContent>
  );
}
