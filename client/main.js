import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './main.html';
import './templates/home.html';
import './templates/request_loan.html';


FlowRouter.route('/dashboard', {
    name:'dashboard',
    action() {
      BlazeLayout.render('mainLayout', { content: 'dashboard' });
    },
  });

FlowRouter.route('/request_loan', {
    name:'request_loan',
    action() {
      BlazeLayout.render('mainLayout', { content: 'request_loan' });
    },
  });

