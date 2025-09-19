import {
  Category,
  DocumentText,
  Folder,
  Profile2User,
  Calendar,
  ClipboardText,
  Document,
  People,
  TickCircle,
  TaskSquare,
  Call,
  Notification,
  Book,
  SecuritySafe,
  Setting2,
  Chart,
  ClipboardTick,
  Icon,
} from "iconsax-react";

export type ISidebarItem = {
  label: string;
  icon?: Icon;
  href: string,
  children?: ISidebarItem[];
}


export const sidebarItems = [
  { label: "Home", icon: Category, href: "/home" },
  { label: "MKVanBinnen", icon: DocumentText, href: "/mkvanbinnen" },
  { label: "Document Management", icon: Folder, href: "/documents" },
  { label: "Patient Information", icon: Profile2User, href: "/patients" },
  { label: "Agenda", icon: Calendar, href: "/agenda" },
  {
    label: "My Department",
    icon: ClipboardText,
    href: "/department",
    children: [
      { label: "News", href: "/department/news" },
      { label: "Members", href: "/department/members" },
      { label: "To-Do", href: "/department/todo" },
      { label: "Form Task", href: "/department/form-task" },
      { label: "Agenda", href: "/department/agenda" },
      { label: "Follow up system", href: "/department/follow-up" },
      { label: "Group Settings", href: "/department/settings" },
    ],
  },
  { label: "Phone numbers", icon: Call, href: "/phone-numbers" },
  { label: "My to do Protocols", icon: DocumentText, href: "/protocols" },
  { label: "My Notifications", icon: Notification, href: "/notifications" },
  { label: "Knowledge Base", icon: Book, href: "/knowledge-base" },
  { label: "Super Admin", icon: SecuritySafe, href: "/super-admin" },
  {
    label: "Admin",
    icon: Setting2,
    href: "/admin",
    children: [
      { label: "Agenda", href: "/admin/agenda" },
      { label: "News", href: "/admin/news" },
      { label: "Poll", href: "/admin/poll" },
      { label: "Department Rules", href: "/admin/rules" },
      { label: "Follow up system", href: "/admin/follow-up" },
    ],
  },
];