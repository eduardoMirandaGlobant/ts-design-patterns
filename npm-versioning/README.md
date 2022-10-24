# NPM Versioning

## Tools

semver - semantic versioning

https://docs.npmjs.com/about-semantic-versioning

You can specify which update types your package can accept from dependencies in your package's package.json file.

For example, to specify acceptable version ranges up to 1.0.4, use the following syntax:

Patch releases: 1.0 or 1.0.x or ~1.0.4
Minor releases: 1 or 1.x or ^1.0.4
Major releases: * or x

```
start with 0.0.0

1° hotfix => 0.0.1
2° hotfix => 0.0.2
3° hotfix => 0.0.3
4° hotfix => 0.0.4

1° release feature => 0.1.0 
2° release feature => 0.2.0 
3° release feature => 0.3.0 

AFTER BREAKING CHANGE => 1.0.0 
```

https://github.com/npm/node-semver#versions


```
version Must match version exactly
>version Must be greater than version
>=version etc
<version
<=version

~version "Approximately equivalent to version" 
~1.2.3 := >=1.2.3 <1.(2+1).0 := >=1.2.3 <1.3.0-0

^version "Compatible with version" 
^1.2.3 := >=1.2.3 <2.0.0-0
^0.2.3 := >=0.2.3 <0.3.0-0

1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0
http://... See 'URLs as Dependencies' below
* Matches any version
"" (just an empty string) Same as *
version1 - version2 Same as >=version1 <=version2.
range1 || range2 Passes if either range1 or range2 are satisfied.
git... See 'Git URLs as Dependencies' below
user/repo See 'GitHub URLs' below
tag A specific version tagged and published as tag See npm dist-tag
path/path/path See Local Paths below
```

```
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```