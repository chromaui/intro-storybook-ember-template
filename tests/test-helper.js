import Application from 'intro-storybook-ember-template/app';
import config from 'intro-storybook-ember-template/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
