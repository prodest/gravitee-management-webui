/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import NotificationService from "../../../../services/notification.service";
import TopApiService from "../../../../services/top-api.service";
import {IScope} from "angular";

function DeleteTopApiDialogController(
  $scope: IScope,
  $mdDialog: angular.material.IDialogService,
  topApi: any,
  TopApiService: TopApiService,
  NotificationService: NotificationService) {
  'ngInject';

  $scope.topApi = topApi;

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.ok = function() {
    TopApiService.delete(topApi).then(() => {
      NotificationService.show("Api '" + topApi.name + "' deleted with success from the list of top APIs");
      $mdDialog.hide(topApi);
    });
  };
}

export default DeleteTopApiDialogController;
