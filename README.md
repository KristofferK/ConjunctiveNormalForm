# ConjunctiveNormalForm
Determines which boolean-values must be given to a formula to make it pass.

## Example
To test the algorithm, we'll be using the following four formulas
* ![Formula 1][formula1]
* ![Formula 2][formula2]
* ![Formula 3][formula3]
* ![Formula 4][formula4]

There are three solutions for the first one:
* A = false, B = false, C = true
* A = false, B = true, C = false
* A = false, B = true, C = true

We'd like the output of the algorithm to be:
```javascript
["001", "010", "011"]
```

## Actual output
Given the algorithm ![Formula 1][formula1].
We'll get the following output
![Output of formula 1][formula1solution]

## Installation
You must first transpile the .ts files to .js, using ```tsc```. Afterwards you can run the project using ```node runner.js```

[formula1]: https://wikimedia.org/api/rest_v1/media/math/render/svg/b55a331db90a18ae2d106c743167aa0970f341fb "Formula 1"
[formula2]: https://wikimedia.org/api/rest_v1/media/math/render/svg/6adf05496a3f0108f139aa490247ae0b8dc0dec7 "Formula 2"
[formula3]: https://wikimedia.org/api/rest_v1/media/math/render/svg/9b9c9c90857c12727201dd9e47a4e7c8658fdbc5 "Formula 3"
[formula4]: https://wikimedia.org/api/rest_v1/media/math/render/svg/74954195333a8593163b93a9688695b8dc74da55 "Formula 4"
[formula1solution]: https://i.gyazo.com/bcab175f21d9af7f7a006c00fe80f7a8.png