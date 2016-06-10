/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */

import angular from 'angular';
import OpenMRS from '../../node_modules/openmrs.js/lib/openmrs';

export default angular
        .module('demoApp',[])
        .controller('demoAppController', function($scope){

        $scope.login = function(){
          $scope.o = new OpenMRS();
          $scope.o.login('admin', 'test', 'http://localhost:8081/openmrs-standalone').then(() => {
            console.log('Login Success!')
          }).catch((err) => {
            console.log(err);
          });
        };

        $scope.patientSearch ='Judy';

        $scope.search = function(){
          $scope.o.api.patient.getAllPatients({
            q: $scope.patientSearch // search query
            //v: "full",
          }).then((results) => {
            $scope.patientList = results.obj.results;
            console.log(results.obj.results);
          }).catch((err) => {
            console.log(err);
          });
        }

        });
