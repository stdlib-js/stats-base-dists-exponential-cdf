/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var cdf = require( './../lib' );

var opts = {
	'dtype': 'float64'
};
var x = uniform( 10, 0.0, 10.0, opts );
var lambda = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, λ: %0.4f, F(x;λ): %0.4f', x, lambda, cdf );
