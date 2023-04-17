"use client"

import {
  ApertureIcon,
  Backpack,
  Briefcase,
  ChevronDown,
  Chrome,
  Dribbble,
  FileText,
  Layers,
  Layout,
  LayoutDashboard,
  Map,
  Network,
  Palette,
  Rocket,
  Table,
  User,
} from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

function Navigations() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto w-full py-2 lg:w-11/12">
        <Menubar>
          {/* dashboard */}
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-2">
                <LayoutDashboard size={18} />
                <p>Dashboard</p>
                <ChevronDown size={18} />
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Analytics</MenubarItem>
              <MenubarItem>CRM</MenubarItem>
              <MenubarItem>Ecommerce</MenubarItem>
              <MenubarItem>Crypto</MenubarItem>
              <MenubarItem>Projects</MenubarItem>
              <MenubarItem>NFT</MenubarItem>
              <MenubarItem>Jobs</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          {/* apps */}
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-2">
                <Layers size={18} />
                <p>Apps</p>
                <ChevronDown size={18} />
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Calendar</MenubarItem>
              <MenubarItem>Chat</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Email</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Mailbox</MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>Email Templates</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Basic Actions</MenubarItem>
                      <MenubarItem>Ecommerce Actions</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Ecommerce</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Products</MenubarItem>
                  <MenubarItem>Product Details</MenubarItem>
                  <MenubarItem>Create Product</MenubarItem>
                  <MenubarItem>Orders</MenubarItem>
                  <MenubarItem>Order Details</MenubarItem>
                  <MenubarItem>Customers</MenubarItem>
                  <MenubarItem>Shopping Cart</MenubarItem>
                  <MenubarItem>Checkout</MenubarItem>
                  <MenubarItem>Sellers</MenubarItem>
                  <MenubarItem>Seller Details</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Projects</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>List</MenubarItem>
                  <MenubarItem>Overview</MenubarItem>
                  <MenubarItem>Create Project</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Tasks</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Kanban Board</MenubarItem>
                  <MenubarItem>List View</MenubarItem>
                  <MenubarItem>Task Details</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>CRM</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Contacts</MenubarItem>
                  <MenubarItem>Companies</MenubarItem>
                  <MenubarItem>Deals</MenubarItem>
                  <MenubarItem>Leads</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Crypto</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Transactions</MenubarItem>
                  <MenubarItem>Buy & Sell</MenubarItem>
                  <MenubarItem>Orders</MenubarItem>
                  <MenubarItem>My Wallet</MenubarItem>
                  <MenubarItem>ICO List</MenubarItem>
                  <MenubarItem>KYC Application</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Invoices</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>List View</MenubarItem>
                  <MenubarItem>Details</MenubarItem>
                  <MenubarItem>Create Invoice</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Support Tickets</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>List View</MenubarItem>
                  <MenubarItem>Ticket Details</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>NFT Marketplace</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Marketplace</MenubarItem>
                  <MenubarItem>Explore Now</MenubarItem>
                  <MenubarItem>Live Auction</MenubarItem>
                  <MenubarItem>Item Details</MenubarItem>
                  <MenubarItem>Collections</MenubarItem>
                  <MenubarItem>Creators</MenubarItem>
                  <MenubarItem>Ranking</MenubarItem>
                  <MenubarItem>Wallet Connect</MenubarItem>
                  <MenubarItem>Create NFT</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>File Manager</MenubarItem>
              <MenubarItem>To Do</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Jobs</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Statstics</MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>Job Lists</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>List</MenubarItem>
                      <MenubarItem>Grid</MenubarItem>
                      <MenubarItem>Overview</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger>Candidate Lists</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>List View</MenubarItem>
                      <MenubarItem>Grid View</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>Application</MenubarItem>
                  <MenubarItem>New Job</MenubarItem>
                  <MenubarItem>Company List</MenubarItem>
                  <MenubarItem>Job Categories</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>API Key</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          {/* layouts */}
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-2">
                <Layout size={18} />
                <p>Layouts</p>
                <ChevronDown size={18} />
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Vertical</MenubarItem>
              <MenubarItem>Detached</MenubarItem>
              <MenubarItem>Two Column</MenubarItem>
              <MenubarItem>Hovered</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          {/* authentication */}
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-2">
                <User size={18} />
                <p>Authentication</p>
                <ChevronDown size={18} />
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>Sign In</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic</MenubarItem>
                  <MenubarItem>Cover</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Sign Up</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic</MenubarItem>
                  <MenubarItem>Cover</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Password Reset</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic</MenubarItem>
                  <MenubarItem>Cover</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Password Create</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic</MenubarItem>
                  <MenubarItem>Cover</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Lock Screen</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic</MenubarItem>
                  <MenubarItem>Cover</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Log Out</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic</MenubarItem>
                  <MenubarItem>Cover</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Success Message</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic</MenubarItem>
                  <MenubarItem>Cover</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Two Step Verification</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic</MenubarItem>
                  <MenubarItem>Cover</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Errors</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>404 Basic</MenubarItem>
                  <MenubarItem>404 Cover</MenubarItem>
                  <MenubarItem>404 Alt</MenubarItem>
                  <MenubarItem>500</MenubarItem>
                  <MenubarItem>Offline Page</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          {/* pages */}
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-2">
                <FileText size={18} />
                <p>Pages</p>
                <ChevronDown size={18} />
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Starter</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Profile</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Simple Page</MenubarItem>
                  <MenubarItem>Settings</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>Team</MenubarItem>
              <MenubarItem>Timeline</MenubarItem>
              <MenubarItem>FAQs</MenubarItem>
              <MenubarItem>Pricing</MenubarItem>
              <MenubarItem>Gallery</MenubarItem>
              <MenubarItem>Maintainance</MenubarItem>
              <MenubarItem>Coming Soon</MenubarItem>
              <MenubarItem>Sitemap</MenubarItem>
              <MenubarItem>Search Results</MenubarItem>
              <MenubarItem>Privacy Policy</MenubarItem>
              <MenubarItem>Terms & Conditions</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          {/* landing page */}
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-2">
                <Rocket size={18} />
                <p>Landing</p>
                <ChevronDown size={18} />
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>One Page</MenubarItem>
              <MenubarItem>NFT Landing</MenubarItem>
              <MenubarItem>Job</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          {/* base ui */}
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-2">
                <Palette size={18} />
                <p>Base UI</p>
                <ChevronDown size={18} />
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <div className="flex items-start gap-6">
                <div>
                  <MenubarItem>Alerts</MenubarItem>
                  <MenubarItem>Badges</MenubarItem>
                  <MenubarItem>Buttons</MenubarItem>
                  <MenubarItem>Colors</MenubarItem>
                  <MenubarItem>Cards</MenubarItem>
                  <MenubarItem>Carousel</MenubarItem>
                  <MenubarItem>Dropdowns</MenubarItem>
                  <MenubarItem>Grid</MenubarItem>
                </div>
                <div>
                  <MenubarItem>Images</MenubarItem>
                  <MenubarItem>Tabs</MenubarItem>
                  <MenubarItem>Accordion & Collapse</MenubarItem>
                  <MenubarItem>Modals</MenubarItem>
                  <MenubarItem>Offcanvas</MenubarItem>
                  <MenubarItem>Placeholders</MenubarItem>
                  <MenubarItem>Progress</MenubarItem>
                  <MenubarItem>Notification</MenubarItem>
                </div>
                <div>
                  <MenubarItem>Media Object</MenubarItem>
                  <MenubarItem>Embed Video</MenubarItem>
                  <MenubarItem>Typography</MenubarItem>
                  <MenubarItem>List</MenubarItem>
                  <MenubarItem>General</MenubarItem>
                  <MenubarItem>Ribbons</MenubarItem>
                  <MenubarItem>Utilities</MenubarItem>
                </div>
              </div>
            </MenubarContent>
          </MenubarMenu>
          {/* more */}
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                <p>More</p>
                <ChevronDown size={18} />
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>
                  <div className="flex space-x-2">
                    <Backpack size={18} strokeWidth={1.5} />
                    <p>Advance UI</p>
                  </div>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Sweet Alerts</MenubarItem>
                  <MenubarItem>Nestable List</MenubarItem>
                  <MenubarItem>Scrollbar</MenubarItem>
                  <MenubarItem>Animation</MenubarItem>
                  <MenubarItem>Tour</MenubarItem>
                  <MenubarItem>Swipe Slider</MenubarItem>
                  <MenubarItem>Ratings</MenubarItem>
                  <MenubarItem>Highlight</MenubarItem>
                  <MenubarItem>ScrollSpy</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <div className="flex space-x-2">
                    <ApertureIcon size={18} strokeWidth={1.5} />
                    <p>Widgets</p>
                  </div>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic Elements</MenubarItem>
                  <MenubarItem>Form Select</MenubarItem>
                  <MenubarItem>Checkboxes & Radios</MenubarItem>
                  <MenubarItem>Pickers</MenubarItem>
                  <MenubarItem>Input Masks</MenubarItem>
                  <MenubarItem>Advanced</MenubarItem>
                  <MenubarItem>Range Slider</MenubarItem>
                  <MenubarItem>Validation</MenubarItem>
                  <MenubarItem>Wizard</MenubarItem>
                  <MenubarItem>Editor</MenubarItem>
                  <MenubarItem>File Uploads</MenubarItem>
                  <MenubarItem>Form Layouts</MenubarItem>
                  <MenubarItem>Select2</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <div className="flex space-x-2">
                    <Table size={18} strokeWidth={1.5} />
                    <p>Tables</p>
                  </div>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Basic Tables</MenubarItem>
                  <MenubarItem>Grid Js</MenubarItem>
                  <MenubarItem>List Js</MenubarItem>
                  <MenubarItem>Datatables</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <div className="flex space-x-2">
                    <Chrome size={18} strokeWidth={1.5} />
                    <p>Charts</p>
                  </div>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Apexcharts</MenubarItem>
                  <MenubarItem>Chartjs</MenubarItem>
                  <MenubarItem>Echarts</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <div className="flex space-x-2">
                    <Dribbble size={18} strokeWidth={1.5} />
                    <p>Icons</p>
                  </div>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Remix</MenubarItem>
                  <MenubarItem>Boxicons</MenubarItem>
                  <MenubarItem>Material Design</MenubarItem>
                  <MenubarItem>Line Awesome</MenubarItem>
                  <MenubarItem>Feather</MenubarItem>
                  <MenubarItem>Crupto SVG</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <div className="flex space-x-2">
                    <Map size={18} strokeWidth={1.5} />
                    <p>Maps</p>
                  </div>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Google</MenubarItem>
                  <MenubarItem>Vector</MenubarItem>
                  <MenubarItem>Leaflet</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <div className="flex space-x-2">
                    <Network size={18} strokeWidth={1.5} />
                    <p>Multi Level</p>
                  </div>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Level 1.1</MenubarItem>
                  <MenubarItem>level 1.2</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </section>
  )
}

export default Navigations
