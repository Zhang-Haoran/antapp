export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  {
    name: 'Teacher Table',
    icon: 'table',
    path: '/teacherTable',
    component: './TeacherTable',
  },
  {
    name: 'TimeRecord Table',
    icon: 'table',
    path: '/timeRecordTable',
    component: './TimeRecordTable',
  },
  {
    name: 'Course Table',
    icon: 'table',
    path: '/courseTable',
    component: './CourseTable',
  },
  {
    path: '/',
    redirect: '/TeacherTable',
  },
  {
    component: './404',
  },
];
