const MainLayout = () => import("../skin/" + process.env.VUE_APP_SKIN_NAME + "/Layouts/MainLayout");
const Home  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Home/Home");
const Contacts  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Contacts/Contacts");
const Explorer  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Explorer/Explorer");
const Nft  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Nft/Nft");
const Help  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Contacts/Help");
const Authors  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Authors/Authors");
const Create  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Profile/Create");
const Profile  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Profile/Profile");
const Privacy  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Terms/Privacy");
const Nfts  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Profile/Nfts");
const Service  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Terms/Service");
const ExplorerNfts  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Explorer/ExplorerNfts");
const Setting  = () => import( "../skin/" + process.env.VUE_APP_SKIN_NAME + "/Profile/Setting");
const AuthApply  = () => import("../skin/" + process.env.VUE_APP_SKIN_NAME + "/Profile/AuthApply");

const routes = [
  {
    path: '/',
    component: MainLayout,
    name: 'MainLayout',

    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/explorer',
        name: 'explorer',
        component: Explorer,
        redirect : '/explorer/all',
        children: [
          {
            path: ':tab',
            name: 'ExplorerNfts',
            component: ExplorerNfts
          }
        ]
      },
      {
        path: '/nft/:nft_id',
        name: 'Nft',
        component: Nft,
      },
      {
        path: '/authors/:tab',
        name: 'authors',
        component: Authors,
      },
      {
        path: '/profile/:address',
        name: 'Profile',
        component: Profile,
        redirect : '/profile/:address/nfts/sale',
        children: [
          {
            path: 'nfts/:tab',
            name: 'Nfts',
            component: Nfts
          },
          {
            path: 'setting',
            name: 'Setting',
            component: Setting
          },
          {
            path: 'auth',
            name: 'AuthApply',
            component: AuthApply
          },
          {
            path: 'create',
            name: 'Create',
            component: Create
          },
        ]
      },
      {
        path: '/help',
        name: 'Help',
        component: Help,
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts,
      },
      {
        path: '/privacy',
        name: 'Privacy',
        component: Privacy,
      },
      {
        path: '/service',
        name: 'Service',
        component: Service,
      },

    ]
  }
];

export default routes;
