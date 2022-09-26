import type { AppRouteModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

// import { t } from '/@/hooks/web/useI18n';

const summaryTable: AppRouteModule = {
  path: '/summaryReport',
  name: 'SummaryReport',
  component: () => import('/@/views/summaryReport/index.vue'),
  meta: {
    hideChildrenInMenu: true,
    title: '报表',
  },
  children: [
    {
      path: 'view',
      name: 'SummaryReportView',
      component: () => import('/@/views/sys/summaryTable/index.vue'),
      meta: {
        title: t('routes.dashboard.analysis'),
      },
    },
  ],
};

export default summaryTable;
