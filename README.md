Python Cheatsheet 中文版
=======================
<sup>[下载文本文件](https://raw.githubusercontent.com/Alex-Shan/python-cheatsheet/lang/cn/README.md)、[在 GitHub 上 Fork](https://github.com/gto76/python-cheatsheet) 或[查看 FAQ](web/faq.html)。
</sup>

![Monty Python](web/image_888.jpeg)


目录
--------
**&nbsp;&nbsp;&nbsp;** **1. 集合（Collections）：** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`列表（List）`](#list)**__,__ **[`字典（Dictionary）`](#dictionary)**__,__ **[`集合（Set）`](#set)**__,__ **[`元组（Tuple）`](#tuple)**__,__ **[`整数范围（Range）`](#range)**__,__ **[`枚举索引（Enumerate）`](#enumerate)**__,__ **[`迭代器（Iterator）`](#iterator)**__,__ **[`生成器（Generator）`](#generator)**__.__
**&nbsp;&nbsp;&nbsp;** **2. 数据类型（Data Types）：** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**  **[`类型（Type）`](#type)**__,__ **[`字符串（String）`](#string)**__,__ **[`正则表达式（Regex）`](#regex)**__,__ **[`格式化（Format）`](#format)**__,__ **[`数值（Numbers）`](#numbers-1)**__,__ **[`组合运算（Combinatorics）`](#combinatorics)**__,__ **[`日期与时间（Datetime）`](#datetime)**__.__
**&nbsp;&nbsp;&nbsp;** **3. 语法规则（Syntax Rules）：** **&nbsp;&nbsp;&nbsp;&nbsp;**  **[`函数（Function）`](#function)**__,__ **[`内联写法（Inline）`](#inline)**__,__ **[`导入（Import）`](#import)**__,__ **[`装饰器（Decorator）`](#decorator)**__,__ **[`类（Class）`](#class)**__,__ **[`鸭子类型（Duck Types）`](#duck-types)**__,__ **[`枚举（Enum）`](#enum)**__,__ **[`异常（Exceptions）`](#exceptions)**__.__
**&nbsp;&nbsp;&nbsp;** **4. 系统调用（System Calls）：** **&nbsp;&nbsp;&nbsp;&nbsp;**  **[`退出（Exit）`](#exit)**__,__ **[`输出（Print）`](#print)**__,__ **[`输入（Input）`](#input)**__,__ **[`命令行参数（Arguments）`](#arguments)**__,__ **[`打开文件（Open）`](#open)**__,__ **[`路径（Paths）`](#paths)**__,__ **[`操作系统命令（OS Commands）`](#os-commands)**__.__
**&nbsp;&nbsp;&nbsp;** **5. 数据格式（Data Formats）：** **&nbsp;&nbsp;&nbsp;**  **[`数据交换格式（JSON）`](#json)**__,__ **[`对象序列化（Pickle）`](#pickle)**__,__ **[`逗号分隔值（CSV）`](#csv)**__,__ **[`嵌入式数据库（SQLite）`](#sqlite)**__,__ **[`字节序列（Bytes）`](#bytes)**__,__ **[`二进制结构（Struct）`](#struct)**__,__ **[`数组（Array）`](#array)**__,__ **[`内存视图（Memory View）`](#memory-view)**__,__ **[`双端队列（Deque）`](#deque)**__.__
**&nbsp;&nbsp;&nbsp;** **6. 其他主题（Misc Topics）：** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**  **[`运算符（Operator）`](#operator)**__,__ **[`模式匹配语句（Match Statement）`](#match-statement)**__,__ **[`日志记录（Logging）`](#logging)**__,__ **[`自省（Introspection）`](#introspection)**__,__ **[`多线程（Threading）`](#threading)**__,__ **[`异步编程（Asyncio）`](#asyncio)**__.__
**&nbsp;&nbsp;&nbsp;** **7. 第三方包（Pip Packages）：** **&nbsp;&nbsp;&nbsp;**  **[`进度条（Progress Bar）`](#progress-bar)**__,__ **[`绘图（Plot）`](#plot)**__,__ **[`表格（Table）`](#table)**__,__ **[`控制台应用（Console App）`](#console-app)**__,__ **[`图形界面应用（GUI App）`](#gui-app)**__,__ **[`网页抓取（Scraping）`](#scraping)**__,__ **[`网页应用（Web App）`](#web-app)**__,__ **[`性能分析（Profiling）`](#profiling)**__.__
**&nbsp;&nbsp;&nbsp;** **8. 多媒体（Multimedia）：** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**  **[`数值计算（NumPy）`](#numpy)**__,__ **[`图像（Image）`](#image)**__,__ **[`动画（Animation）`](#animation)**__,__ **[`音频（Audio）`](#audio)**__,__ **[`合成器（Synthesizer）`](#synthesizer)**__,__ **[`游戏开发（Pygame）`](#pygame)**__,__ **[`数据分析（Pandas）`](#pandas)**__,__ **[`交互式绘图（Plotly）`](#plotly)**__.__


Main
----
```python
if __name__ == '__main__':      # 文件被 import 时，不执行下方缩进的代码。
    main()                      # 执行用户定义的`def main(): ...` function。
```


List
----
```python
<list> = [<el>, <el>, ...]      # 创建新的 list object。例如 `list_a = [1, 2, 3]`。
```

```python
<el>   = <list>[index]          # 第一个 index 为 0，最后一个为 -1。赋值可用 `<list>[i] = <el>`。
<list> = <list>[<slice>]        # 也可用 <list>[from_inclusive : to_exclusive : ±step]。
```

```python
<list>.append(<el>)             # 将 element 添加到末尾。或 `<list> += [<el>]`。
<list>.extend(<coll>)           # 将 collection 的 items 追加到末尾。也可用 `<list> += <coll>`。
```

```python
<list>.sort()                   # 按升序排序。接受 `reverse=True`。
<list>.reverse()                # 反转 elements 的顺序，时间复杂度为 linear time。
<list> = sorted(<coll>)         # 返回新排序的 list。接受 `reverse=True`。
<iter> = reversed(<list>)       # 返回反转的 iterator。还有list(<iterator>)。
```

```python
<el>  = max(<coll>)             # 返回最大的 element。还有min(<el>, <el>)。
<num> = sum(<coll>)             # 返回 elements 的总和。还有math.prod(<coll>)。
```

```python
elementwise_sum  = [sum(pair) for pair in zip(list_a, list_b)]
sorted_by_second = sorted(<coll>, key=lambda pair: pair[1])
sorted_by_both   = sorted(<coll>, key=lambda p: (p[1], p[0]))
flatter_list     = list(itertools.chain.from_iterable(<list>))
```
* **sort()、sorted()、max() 和 min() 的详细说明见 [Sortable](#sortable)。**
* **[operator](#operator) module 中的 itemgetter() function 可以替代上述 [lambdas](#lambda)。**
* **本文使用 collection 一词表示 [iterable](#abstract-base-classes)，原因见 [duck types](#iterable-duck-types)。**

```python
<int> = len(<list/dict/set/…>)  # 返回 items 的数量，不接受 iterators。
<int> = <list>.count(<el>)      # 计算出现次数。还有`if <el> in <coll>: ...`。
<int> = <list>.index(<el>)      # 返回首次出现位置的 index，找不到则抛出 ValueError。
<el>  = <list>.pop()            # 移除并返回末尾 item；传入 index 时移除该位置的 item。
<list>.insert(<int>, <el>)      # 在 index 处插入 item，并将其余 items 后移。
<list>.remove(<el>)             # 删除第一个匹配项或抛出 ValueError。
<list>.clear()                  # 删除所有 items。也由 dict 和 set 提供。
```


Dictionary
----------
```python
<dict> = {key: val, key: val, ...}            # 使用 `<dict>[key]` 获取或分配 value。
```

```python
<view> = <dict>.keys()                        # 反映所有变动的 keys collection。
<view> = <dict>.values()                      # 反映所有变动的 values collection。
<view> = <dict>.items()                       # 由 tuples 组成的 collection，每个 tuple 包含 key 和 value。
```

```python
value  = <dict>.get(key, default=None)        # Key 不存在时返回 'default' argument。
value  = <dict>.setdefault(key, default)      # Key 不存在时写入 'default' 并返回该 value。
<dict> = collections.defaultdict(<type>)      # 使用 `<type>()` 自动生成 default value 的 dict。
```

```python
<dict> = dict(<collection>)                   # 从 key-value pairs 的 collection 创建 dict。
<dict> = dict(zip(keys, values))              # 从两个 collections 创建 key-value 对。
<dict> = dict.fromkeys(keys [, value])        # 如果只传入 keys，各 items 的 value 为 None。
```

```python
<dict>.update(<dict>)                         # 将 items 合并到 dict，传入的 dict 优先。
value = <dict>.pop(key)                       # 移除并返回 item；不存在时抛出 KeyError。
{k for k, v in <dict>.items() if v == 123}    # 返回 keys 的 set，其 value 等于 123。
{k: v for k, v in <dict>.items() if k in ks}  # 返回包含指定 keys 的 items 的 dict。
```

### Counter
```python
>>> from collections import Counter
>>> counter = Counter(['blue', 'blue', 'red'])
>>> counter['yellow'] += 3
>>> print(counter.most_common())
[('yellow', 3), ('blue', 2), ('red', 1)]
```


Set
---
```python
<set> = {<el>, <el>, ...}           # 由不重复 items 组成的 collection。也可用 set()、set(<coll>)。
```

```python
<set>.add(<el>)                     # 将 item 添加到 set。与 `<set> |= {<el>}` 相同。
<set>.update(<coll> [, ...])        # 将 items 添加到 set。与 `<set> |= <set>` 相同。
```

```python
<set> = <set>.union(<coll>)         # 返回所有 items 中的一个 set。还有<set> | <set>。
<set> = <set>.intersection(<coll>)  # 返回共有的所有 items。也可用 <set> & <set>。
<set> = <set>.difference(<coll>)    # 返回当前 set 独有的 items。也可用 <set> - <set>。
```

```python
<bool> = <set>.issuperset(<coll>)   # 若 collection 含有当前 set 没有的 items，返回 False。
<bool> = <set>.issubset(<coll>)     # Collection 是否为 superset？也可用 <set> <= <set>。
```

```python
<el> = <set>.pop()                  # 移除并返回一个 item；为空时抛出 KeyError。
<set>.remove(<el>)                  # 移除指定 item；不存在时抛出 KeyError。
<set>.discard(<el>)                 # 等价于 remove() but it doesn't raise an error.
```

### Frozen Set
* **Frozenset 是普通 set 的 immutable、hashable 版本。**
* **因此，它可以作为 dict 的 key，也可以作为 set 的 item。**
```python
<frozenset> = frozenset(<collection>)
```


Tuple
-----
**Tuple 是 immutable 且 hashable 的 list。**
```python
<tuple> = ()                        # 返回空的 tuple。还有tuple()、tuple(<coll>)。
<tuple> = (<el>,)                   # 返回 tuple 和 1 个 element。或 `<tup.> = <el>,`。
<tuple> = (<el>, <el> [, ...])      # 返回 tuple。或 `<tuple> = <el>, <el> [, ...]`。
```

### Named Tuple
**带有具名 elements 的 tuple subclass。**
```python
>>> import collections as co
>>> Point = co.namedtuple('Point', 'x y')
>>> p = Point(1, y=2)
>>> print(p)
Point(x=1, y=2)
>>> p.x, p[1]
(1, 2)
```


Range
-----
**由等间距 integers 组成的 sequence。**
```python
<range> = range(stop)                # 即 range(to_exclusive). Ints from 0 to `stop-1`.
<range> = range(start, stop)         # 即 range(from, to_exc). From start to `stop-1`.
<range> = range(start, stop, step)   # 即 range(from_inclusive, to_exclusive, ±step).
```

```python
>>> [i for i in range(3)]
[0, 1, 2]
```

### Enumerate
**将 collection 与 range 逐项配对的 iterator。**
```python
for i, el in enumerate(<coll>):
    print(f'Element {el} has index {i}.')
```


Iterator
--------
**由 elements 组成、可能无限延伸的 stream。**

```python
import itertools as it
```

```python
<iter> = iter(<coll>)                    # 逐一返回传入 elements 的 iterator。
<iter> = iter(<func>, to_exc)            # 重复调用 `<func>()`，直到收到 'to_exc' value。
<iter> = (<expr> for <name> in <coll>)   # 例如 `(i+1 for i in range(3))`，采用 lazy evaluation。
<el>   = next(<iter> [, default])        # 结束时抛出 StopIteration；若指定 'default' 则返回它。
<list> = list(<iter>)                    # 返回 iterator 的剩余 elements 的 list。
```

```python
<iter> = it.count(start=0, step=1)       # 不断返回递增后的 'start'，接受 floats。
<iter> = it.repeat(<obj> [, times])      # 重复返回传入的 element；可无限重复或重复 'times' 次。
<iter> = it.cycle(<coll>)                # 无休止地重复该序列。接受 iterators。
```

```python
<iter> = it.chain(<coll>, <coll>, ...)   # 按顺序返回每个 collection 的每个 element。
<iter> = it.chain.from_iterable(<coll>)  # 接受 collections 的 collection (i.e.iterable)。
<iter> = it.islice(<coll>, stop)         # 也接受 'start' 和 'step'，这些 arguments 可为 None。
<iter> = it.product(<coll>, <coll>)      # 等价于 `((a, b) for a in arg_1 for b in arg_2)`.
```
* **for loop 会调用 `'iter(<coll/iter>)'`；对 iterator 调用时会返回它自身。**


Generator
---------
* **任何包含 yield statement 的 function 都会返回 generator。**
* **Generator 和 iterator 可以互换使用，见 [Iterator](#iterator-1) duck type。**

```python
def count(start, step):
    while True:
        yield start
        start += step
```

```python
>>> counter = count(10, 2)
>>> next(counter), next(counter), next(counter)
(10, 12, 14)
```


Type
----
* **Python 中的所有 values 都是 objects。**
* **每个 object 都有确定的 type。**
* **Type 与 class 在这里含义相同。**

```python
<type> = type(<obj>)                   # Object 的 type。还有`<obj>.__class__`。
<bool> = isinstance(<obj>, <type>)     # 也可用 `issubclass(type(<obj>), <type>)`.
```

```python
>>> type('a'), 'a'.__class__, str
(<class 'str'>, <class 'str'>, <class 'str'>)
```

<h4 id="sometypesdonothavebuiltinnamessotheymustbeimported">某些 types 没有内置名称，需要先 import：</h4>
```python
from types import FunctionType, MethodType, LambdaType, GeneratorType
```

### Abstract Base Classes
**每个 abstract base class 都规定了一组 virtual subclasses。isinstance() 和 issubclass() 会将这些 classes 识别为该 ABC 的 [subclasses](#subclass)，即使它们并未实际继承该 ABC。ABC 也可以自行判断某个 class 是否属于它的 virtual subclass，通常依据该 class 实现的 methods。例如，Iterable ABC 检查 iter() method，而 Collection ABC 检查 iter()、contains() 和 len()。**

```python
>>> from collections.abc import Iterable, Collection, Sequence
>>> isinstance([1, 2, 3], Iterable)
True
```

```text
+------------------+------------+------------+------------+
|                  |  Iterable  | Collection |  Sequence  |
+------------------+------------+------------+------------+
| list, range, str |    yes     |    yes     |    yes     |
| dict, set        |    yes     |    yes     |            |
| iter             |    yes     |            |            |
+------------------+------------+------------+------------+
```

```python
>>> from numbers import Number, Complex, Real, Rational, Integral
>>> isinstance(123, Number)
True
```

```text
+--------------------+---------+---------+--------+----------+----------+
|                    |  Number | Complex |  Real  | Rational | Integral |
+--------------------+---------+---------+--------+----------+----------+
| int                |   yes   |   yes   |  yes   |   yes    |   yes    |
| fractions.Fraction |   yes   |   yes   |  yes   |   yes    |          |
| float              |   yes   |   yes   |  yes   |          |          |
| complex            |   yes   |   yes   |        |          |          |
| decimal.Decimal    |   yes   |         |        |          |          |
+--------------------+---------+---------+--------+----------+----------+
```


String
------
**由字符组成的 immutable sequence。**
```python
<str>  = 'abc'                       # 也可用 "abc"，会解释 \n、\t、\x00-\xff 等 escape sequences。
```

```python
<str>  = <str>.strip()               # 去除两端的所有空白字符。
<str>  = <str>.strip('<chars>')      # 去掉两端指定的字符。也可用 lstrip/rstrip()。
```

```python
<list> = <str>.split()               # 按一个或多个空白字符拆分。
<list> = <str>.split(<str>)          # 按传入的 string 拆分。也接受 `maxsplit=<int>`。
<list> = <str>.splitlines()          # 按 [\n\r\f\v\x1c-\x1e\x85\u2028\u2029] 和 \r\n 分行。
<str>  = <str>.join(<coll_of_str>)   # 使用 string 作为分隔符连接 items。
```

```python
<bool> = <str> in <str>              # 如果 string 包含子字符串，则返回 True。
<bool> = <str>.startswith(<str>)     # 传入 strings 的 tuple 可同时检查多个候选。
<int>  = <str>.find(<str>)           # 返回首次匹配的起始 index，找不到则返回 `-1`。
```

```python
<str>  = <str>.lower()               # 转换为小写。也可用 upper/capitalize/title()。
<str>  = <str>.casefold()            # Lower() 将 ẞ/ß 转换为 ss，将 Σ/ς 转换为 σ 等。
<str>  = <str>.replace(old, new)     # 用 new 替换 string old；new 为 '' 时删除 old。
<str>  = <str>.translate(table)      # 通过 str.maketrans(<chr_to_str_dict>) 获取表格。
```

```python
<str>  = chr(<int>)                  # 将传递的 integer 转换为 Unicode 字符。
<int>  = ord(<str>)                  # 将传递的 Unicode 字符转换为 integer。
```
* **比较 `'Motörhead'` 等 strings 之前，先调用 `'unicodedata.normalize("NFC", <str>)'`，因为 `'ö'` 可以由一个或两个字符表示。**
* **`'NFC'` 将这类字符转换为单个字符，`'NFD'` 则将其拆为两个字符。**

```python
<bool> = <str>.isdecimal()           # 检查是否全为 [0-9]；也包括 [०-९]、[٠-٩]。
<bool> = <str>.isdigit()             # 检查 [²³¹…] 及 isdecimal() 接受的字符；也包括 [፩-፱]。
<bool> = <str>.isnumeric()           # 检查 [¼½¾…] 及 isdigit() 接受的字符；也包括 [零〇一…]。
<bool> = <str>.isalnum()             # 检查 [ABC…] 及 isnumeric() 接受的字符；也包括 [ªµº…]。
<bool> = <str>.isprintable()         # 检查 [ !"#…]、基本 emojis 及 isalnum() 接受的字符。
<bool> = <str>.isspace()             # 检查 [ \t\n\r\f\v\x1c\x1d\x1e\x1f\x85…]。
```


Regex
-----
**用于 regular expression 匹配的 functions。**

```python
import re
<str>   = re.sub(r'<regex>', new, text)  # 将匹配到的内容替换为 string 'new'。
<list>  = re.findall(r'<regex>', text)   # 返回所有出现的 string objects。
<list>  = re.split(r'<regex>', text)     # 在 regex 周围添加括号以保留匹配的内容。
<Match> = re.search(r'<regex>', text)    # 返回 pattern 的首次匹配，未找到则返回 None。
<Match> = re.match(r'<regex>', text)     # 只在 'text' 的开头匹配。
<iter>  = re.finditer(r'<regex>', text)  # 以 Match objects 返回所有匹配。
```

* **Raw string literal 不处理 escape sequence，因此可以直接使用 regex 专用的 escape sequences；这些写法在普通 string literal 中会触发 SyntaxWarning（自 3.12 起）。**
* **Argument `'new'` 也可以是接受 Match object 并返回 string 的 function。**
* **以上所有 functions 都接受 `'flags=re.IGNORECASE'` argument。**
* **`'flags=re.MULTILINE'` 使 `'^'` 和 `'$'` 分别匹配每行的开头与结尾。**
* **`'flags=re.DOTALL'` 使 `'.'` 除其他字符外也能匹配 `'\n'`。**
* **`'re.compile(r"<regex>")'` 返回带有 sub()、findall() 等 methods 的 Pattern object。**

### Match Object
```python
<str>   = <Match>.group()                # 返回完整的匹配结果。也可用 group(0)。
<str>   = <Match>.group(1)               # 返回第一个括号内的部分。
<tuple> = <Match>.groups()               # 将所有括号内的部分返回为 strings。
<int>   = <Match>.start()                # 返回完整匹配的起始 index。
<int>   = <Match>.end()                  # 返回匹配结束位置的 index 加一。
```

### Special Sequences
```python
'\d' == '[0-9]'                          # 也包括 [०-९…]，匹配 decimal 字符。
'\w' == '[a-zA-Z0-9_]'                   # 也包括 [ª²³…]，匹配 alphanumeric 字符或 _。
'\s' == '[ \t\n\r\f\v]'                  # 也包括 [\x1c-\x1f…]，匹配 whitespace。
```
* **默认匹配所有字母表中的十进制数字和字母数字字符。使用 `'flags=re.ASCII'` 后，special sequence 仅匹配前 128 个 Unicode 字符，且 `'\s'` 不再匹配 `'\x1c'`、`'\x1d'`、`'\x1e'` 和 `'\x1f'`（分别用于分隔文件、表、行和字段的不可打印字符）。**
* **使用大写字母（如 `'\D'`、`'\W'` 或 `'\S'`）表示取反。若同时使用 ASCII flag，这些大写形式也会匹配所有非 ASCII 字符。**


Format
------
**String 格式化机制。**
```perl
<str> = f'{<obj>}, {<obj>}'             # 大括号还可以包含 expressions。
<str> = '{}, {}'.format(<obj>, <obj>)   # 也可用 '{0}, {a}'.format(<obj>, a=<obj>)。
<str> = '%s, %s' % (<obj>, <obj>)       # 较旧且功能重复的 formatting method。
```

<h3 id="example">示例</h3>
```python
>>> Person = collections.namedtuple('Person', 'name height')
>>> jean = Person('Jean-Luc', 187)
>>> f'{jean.name} is {jean.height / 100} meters tall.'
'Jean-Luc is 1.87 meters tall.'
```

<h3 id="options">选项</h3>
```python
{<obj>:<10}                             # '<obj>     '.
{<obj>:^10}                             # '  <obj>   '.
{<obj>:>10}                             # '     <obj>'.
{<obj>:.<10}                            # '<obj>.....'.
{<obj>:0}                               # '<obj>'.
```
* **Object 通过 format() function 转换为 string，例如 `'format(<obj>, "<10")'`。**
* **可以通过嵌套大括号动态生成选项：`f'{<obj>:{<str/int>}[…]}'`。**
* **在 expression 后添加 `'='` 会在结果前附上该 expression，例如 `f'{1+1=}'` 返回 `'1+1=2'`。**
* **在 expression 后添加 `'!r'` 会先调用结果的 [repr()](#class) method，再调用 format()。**

### Strings
```python
{'abcde':10}                            # 'abcde     '.
{'abcde':10.3}                          # 'abc       '.
{'abcde':.3}                            # 'abc'.
{'abcde'!r:10}                          # "'abcde'   ".
```

### Numbers
```python
{123456:10}                             # '    123456'.
{123456:10,}                            # '   123,456'.
{123456:10_}                            # '   123_456'.
{123456:+10}                            # '   +123456'.
{123456:=+10}                           # '+   123456'.
```

### Floats
```python
{1.23456:10.3}                          # '      1.23'.
{1.23456:10.3f}                         # '     1.235'.
{1.23456:10.3e}                         # ' 1.235e+00'.
{1.23456:10.3%}                         # '  123.456%'.
```

<h4 id="comparisonofpresentationtypes">各 presentation types 的比较：</h4>
```text
+---------------+---------------+---------------+---------------+---------------+
|               |  {<number>}   |   {<num>:f}   |   {<num>:e}   |   {<num>:%}   |
+---------------+---------------+---------------+---------------+---------------+
|   0.000056789 |   5.6789e-05  |    0.000057   |  5.678900e-05 |    0.005679%  |
|   0.00056789  |   0.00056789  |    0.000568   |  5.678900e-04 |    0.056789%  |
|   0.0056789   |   0.0056789   |    0.005679   |  5.678900e-03 |    0.567890%  |
|   0.056789    |   0.056789    |    0.056789   |  5.678900e-02 |    5.678900%  |
|   0.56789     |   0.56789     |    0.567890   |  5.678900e-01 |   56.789000%  |
|   5.6789      |   5.6789      |    5.678900   |  5.678900e+00 |  567.890000%  |
|  56.789       |  56.789       |   56.789000   |  5.678900e+01 | 5678.900000%  |
+---------------+---------------+---------------+---------------+---------------+
```

```text
+---------------+---------------+---------------+---------------+---------------+
|               |  {<float>:.2} |  {<num>:.2f}  |  {<num>:.2e}  |  {<num>:.2%}  |
+---------------+---------------+---------------+---------------+---------------+
|   0.000056789 |    5.7e-05    |      0.00     |    5.68e-05   |      0.01%    |
|   0.00056789  |    0.00057    |      0.00     |    5.68e-04   |      0.06%    |
|   0.0056789   |    0.0057     |      0.01     |    5.68e-03   |      0.57%    |
|   0.056789    |    0.057      |      0.06     |    5.68e-02   |      5.68%    |
|   0.56789     |    0.57       |      0.57     |    5.68e-01   |     56.79%    |
|   5.6789      |    5.7        |      5.68     |    5.68e+00   |    567.89%    |
|  56.789       |    5.7e+01    |     56.79     |    5.68e+01   |   5678.90%    |
+---------------+---------------+---------------+---------------+---------------+
```
* **`'{<num>:g}'` 相当于去掉 `'.0'`，并从 `'1e+06'` 开始使用指数表示的 `'{<float>:.6}'`。**
* **恰好可以向上或向下舍入时，选择末位为偶数的结果。因此 `'{6.5:.0f}'` 得到 `'6'`，`'{7.5:.0f}'` 得到 `'8'`。**
* **上一规则只适用于能由 float 精确表示的数（如 `.5`、`.25` 等）。**

### Ints
```python
{90:x}                                  # 将 90 转换为 hexadecimal 数字 '5a'。
{90:b}                                  # 将 90 转换为 binary 数字 '1011010'。
{90:c}                                  # 将 90 转换为 Unicode 字符 'Z'。
```


Numbers
-------
```python
<integer> = int(<float/str/bool>)             # 表示整数，将 floats 向零截断。
<float>   = float(<integer/str/bool>)         # 8-byte 浮点数。也可用 <fl>e±<int>。
<complex> = complex(real=0, imag=0)           # Complex 数。也可用 <fl> ± <fl>j。
<Fract>   = fractions.Fraction(numr, denom)   # `<Fraction> = <Fraction> / <int>`。
<Decimal> = decimal.Decimal(<str/int/tup>)    # `Decimal((1, (2,), 3)) == -2000`。
```
* **如果 string 格式不合法，`'int(<str>)'` 和 `'float(<str>)'` 会抛出 ValueError exception。**
* **Decimal object 可以精确保存十进制数，而 float 通常存在 `'1.1 + 2.2 != 3.3'` 这样的精度差异。**
* **可以用 `'math.isclose(<float>, <float>, rel_tol=1e-9)'` 比较 floats。**
* **使用 `'decimal.getcontext().prec = <int>'` 设置 Decimal 运算的精度。**
* **凡是接受 int 的地方通常也可以使用 bool，因为 bool 是 int 的 subclass：`'True + 1 == 2'`。**

### Built-in
```python
<num> = abs(<num>)                            # 例如 `abs(-50) == abs(50) == 50`.
<num> = pow(<num>, <num>)                     # 例如 `pow(3, 4) == 3 ** 4 == 81`.
<num> = round(<num> [, ndigits])              # 例如 `round(123.45, -1) == 120`.
<num> = min(<coll_of_nums>)                   # 也可用 `max(<num>, <num> [, ...])`.
<num> = sum(<coll_of_nums>)                   # 也可用 `math.prod(<coll_of_nums>)`.
```

### Math
```python
import math as mt
<num> = mt.pi/inf/nan                         # `inf*0` 和 `nan+1` 返回 `nan`。
<num> = mt.sqrt/factorial(<num>)              # `sqrt(-1)` 会抛出 ValueError。
<num> = mt.sin/cos/tan(<num>)                 # 也提供 degrees、radians、asin 等 functions。
<num> = mt.log/log10/log2(<num>)              # log() 还接受 'base' argument。
```

### Statistics
```python
import statistics as st
<obj>  = st.mean/median(<coll>)               # mode() 返回出现次数最多的 element。
<num>  = st.variance/stdev(<coll>)            # 根据样本估计 values。
<list> = st.quantiles(<coll>, n=4)            # 估计样本的切分点。
```

### Random
```python
import random as rd
<num> = rd.random()                           # 从 [0, 1) 中随机选择 float。
<num> = rd.randint/uniform(a, b)              # 从 [a, b] 中选择 int/float。
<num> = rd.gauss(mean, stdev)                 # 也可用 triangular(low, high, mode).
<obj> = rd.choice(<sequence>)                 # 不修改原 collection。也可用 sample(p, n)。
rd.shuffle(<list>)                            # 适用于所有 mutable sequences。
```

### Hex, Bin
```python
<int> = 0x<hex>                               # 例如 `0xFf == 255`. Also 0b<bin>.
<int> = int('±<hex>', 16)                     # 也可用 int('±0x<hex>/±0b<bin>', 0).
<str> = hex(<int>)                            # 返回 '[-]0x<hex>'。也可用 bin()。
```

### Bitwise
```python
<int> = <int> & <int>                         # 例如 `0b1100 & 0b1010 == 0b1000`.
<int> = <int> | <int>                         # 例如 `0b1100 | 0b1010 == 0b1110`.
<int> = <int> ^ <int>                         # 例如 `0b1100 ^ 0b1010 == 0b0110`.
<int> = <int> << n_bits                       # 例如 `0b1111 << 4 == 0b11110000`.
<int> = ~<int>                                # 例如 `~100 == -(100+1) == -101`.
```


Combinatorics
-------------
```python
import itertools as it
```

```python
>>> list(it.product('abc', repeat=2))        #   a  b  c
[('a', 'a'), ('a', 'b'), ('a', 'c'),         # a x  x  x
 ('b', 'a'), ('b', 'b'), ('b', 'c'),         # b x  x  x
 ('c', 'a'), ('c', 'b'), ('c', 'c')]         # c x  x  x
```

```python
>>> list(it.permutations('abc', 2))          #   a  b  c
[('a', 'b'), ('a', 'c'),                     # a .  x  x
 ('b', 'a'), ('b', 'c'),                     # b x  .  x
 ('c', 'a'), ('c', 'b')]                     # c x  x  .
```

```python
>>> list(it.combinations('abc', 2))          #   a  b  c
[('a', 'b'), ('a', 'c'),                     # a .  x  x
 ('b', 'c')                                  # b .  .  x
]                                            # c .  .  .
```


Datetime
--------
**提供 date、time 和 datetime objects 的 module。**

```python
# $ pip3 install python-dateutil
from datetime import *
import zoneinfo, dateutil.tz
```

```python
<D>  = date(year, month, day)               # 只接受公元 1 至 9999 年之间的有效日期。
<T>  = time(hour=0, minute=0, second=0)     # 接受 `microsecond=0, tzinfo=None, fold=0`。
<DT> = datetime(year, month, day, hour=0)   # 接受 `minute=0, second=0, microsecond=0, …`。
<TD> = timedelta(weeks=0, days=0, hours=0)  # 接受 `minutes=0, seconds=0, microseconds=0`。
```
* **定义了 timezone 的 time 和 datetime 称为 _aware_，未定义的称为 _naive_。Naive time 或 datetime object 会被视为使用系统的 timezone。**
* **`'fold=1'` 表示时钟向后调整时，同一时间的第二次出现（通常回拨一小时）。**
* **Timedelta 将 arguments 规范化为 ±days、seconds（小于 86 400）和 microseconds（小于 1M）。str() method 返回 `'[±D, ]H:MM:SS[.…]'`，total_seconds() 则返回以秒为单位的 float。**
* **使用 `'<D/DT>.weekday()'` 获取表示星期几的 int，星期一为 0。**

### Now
```python
<D/DTn> = D/DT.today()                      # 当前本地日期或 naive datetime。也可用 DT.now()。
<DTa>   = DT.now(<tzinfo>)                  # 指定 timezone 中当前时刻的 aware datetime。
```
* **使用 `'<DTn>.time()'`、`'<DTa>.time()'` 或 `'<DTa>.timetz()'` 提取 time。**

### Timezone
```python
<tzinfo> = timezone.utc                     # Coordinated Universal Time，相当于不实行 DST 的伦敦时间。
<tzinfo> = timezone(<timedelta>)            # 与 UTC 相差固定偏移的 timezone。
<tzinfo> = dateutil.tz.tzlocal()            # 相对 UTC 的偏移动态变化的本地 timezone。
<tzinfo> = zoneinfo.ZoneInfo('<iana_key>')  # 动态偏移的 'Continent/City_Name' timezone。
<DTa>    = <DT>.astimezone(<tzinfo>)        # 转换到指定或本地的固定偏移 timezone。
<Ta/DTa> = <T/DT>.replace(tzinfo=<tzinfo>)  # 只替换 timezone object，不进行时间转换。
```
* **tzlocal()、ZoneInfo() 返回的 timezone，以及 naive objects 隐含的本地 timezone，其偏移量会因 DST 和历史上的基础偏移调整而随时间变化。**
* **在 Windows 上使用 ZoneInfo() 前，运行 `'> pip3 install tzdata'`。**

### Encode
```python
<D/T/DT> = D/T/DT.fromisoformat(<str>)      # 从 ISO string 创建 object；格式错误时抛出 ValueError。
<DT>     = DT.strptime(<str>, '<format>')   # 从自定义 string 创建 naive 或 aware datetime。
<D/DTn>  = D/DT.fromordinal(<int>)          # 从公历元年起的天数创建 date 或 datetime。
<DTn>    = DT.fromtimestamp(<float>)        # 从 epoch 起的秒数创建本地 naive datetime。
<DTa>    = DT.fromtimestamp(<float>, <tz>)  # 从 epoch 起的秒数创建 aware datetime。
```
* **ISO strings 的形式为 `'YYYY-MM-DD'`、`'HH:MM:SS.mmmuuu[±HH:MM]'`，或两者以任意字符连接。小时之后的各部分均可省略。**
* **Python 使用 Unix epoch：`'1970-01-01 00:00 UTC'`、`'1970-01-01 01:00 CET'` 等。**

### Decode
```python
<str>    = <D/T/DT>.isoformat(sep='T')      # 也可用 `timespec='auto/hours/minutes/seconds/…'`.
<str>    = <D/T/DT>.strftime('<format>')    # 返回 object 的自定义 string 表示形式。
<int>    = <D/DT>.toordinal()               # 自公历元年起的天数，忽略 datetime 的时间和 timezone。
<float>  = <DTn>.timestamp()                # 将本地 naive datetime 转为自 epoch 起的秒数。
<float>  = <DTa>.timestamp()                # 将 aware datetime 转为自 epoch 起的秒数。
```

### Format
```python
>>> dta = datetime.strptime('2025-08-14 23:39:00.00 +0200', '%Y-%m-%d %H:%M:%S.%f %z')
>>> dta.strftime("%dth of %B '%y (%a), %I:%M %p %Z")
"14th of August '25 (Thu), 11:39 PM UTC+02:00"
```
* **`'%z'` 接受 `'±HH[:]MM'`，返回 `'±HHMM'`；若 object 为 naive，则返回空 string。**
* **`'%Z'` 接受 `'UTC'`、`'GMT'` 或本地 timezone 的代码，返回 timezone 名称；无名称时返回 `'UTC[±HH:MM]'`，object 为 naive 时返回空 string。**

### Arithmetics
```python
<bool>  =  <D/DTn>  >  <D/DTn>              # 忽略时钟回拨（fold attribute）。也适用于 `==`。
<bool>  =  <DTa>    >  <DTa>                # 共享同一 tzinfo object 时，忽略时钟回拨。
<TD>    =  <D/DTn>  -  <D/DTn>              # 忽略时钟回拨；需先转换到 UTC 才能得到实际时间差。
<TD>    =  <DTa>    -  <DTa>                # 共享同一 tzinfo object 时，忽略时钟回拨。
<D/DT>  =  <D/DT>   ±  <TD>                 # 返回的 datetime 可能落在因调时而不存在的时段。
<TD>    =  <TD>     ±  <TD>                 # 也可用 `<TD> = abs(<TD>)`, `<num> = <TD> / <TD>`.
```


Function
--------
**独立的代码块，在调用时返回 value。**

```python
def my_func(<nondefault_args>): ...                   # 例如 `my_func(x, y):`.
def my_func(<default_args>): ...                      # 例如 `my_func(x=0, y=0):`.
def my_func(<nondef_args>, <def_args>): ...           # 例如 `my_func(x, y=0):`.
```
* **如果没有执行到 `'return <object/expr>'` statement，function 会返回 None。**
* **在 function 中给 global variable 赋值之前，先声明 `'global <var_name>'`。**
* **Default argument 的 value 在其 scope 内首次执行到 function 定义时求值。**
* **对 default argument value 的修改会在多次 function 调用之间保留！**

### Function Call

```python
<obj> = <func>(<positional_args>)                     # 例如 `my_func(0, 0)`.
<obj> = <func>(<keyword_args>)                        # 例如 `my_func(x=0, y=0)`.
<obj> = <func>(<pos_args>, <key_args>)                # 例如 `my_func(0, y=0)`.
```


Splat
-----
**Splat operator（`'*'`）将 collection 展开为 positional arguments；splatty-splat（`'**'`）将 dictionary 展开为 keyword arguments。**
```python
args, kwargs = (1, 2), {'z': 3}
func(*args, **kwargs)
```

<h4 id="isthesameas">等价于：</h4>
```python
func(1, 2, z=3)
```

### Inside Function Def
**Splat 将零个或多个 positional arguments 收集为 tuple；splatty-splat 将零个或多个 keyword arguments 收集为 dictionary。**
```python
def add(*args):
    return sum(args)
```

```python
>>> add(1, 2, 3)
6
```

```text
+-------------------------+--------------+--------------+------------+
|                         | fn(x=1, y=2) |  fn(1, y=2)  |  fn(1, 2)  |
+-------------------------+--------------+--------------+------------+
| fn(x, *args, **kwargs): |     yes      |     yes      |    yes     |
| fn(*args, y, **kwargs): |     yes      |     yes      |            |
| fn(*, x, **kwargs):     |     yes      |              |            |
+-------------------------+--------------+--------------+------------+
```

### Collection Unpacking
```python
head, *body, tail = <collection>    # 头或尾可以省略。
```

### Inside Coll Literals
```python
<list>  = [*<coll> [, ...]]         # 等价于 `list(<coll>) [+ ...]`.
<tuple> = (*<coll>, [...])          # 等价于 `tuple(<coll>) [+ ...]`.
<set>   = {*<coll> [, ...]}         # 等价于 `set(<coll>) [| ...]`.
<dict>  = {**<dict> [, ...]}        # 最后一个 dict 优先。也可用 |。
```


Inline
------
### Lambda
```python
<func> = lambda: <return_val>                     # 只有一个 expression 的 function。
<func> = lambda <arg> [, ...]: <return_val>       # 还允许 default arguments。
```

### Comprehensions
```python
<list> = [i+1 for i in range(5)]                  # 返回 `[1, 2, 3, 4, 5]`。
<iter> = (i for i in range(10) if i > 5)          # 返回 `iter([6, 7, 8, 9])`。
<set>  = {i+5 for i in range(5)}                  # 返回 `{5, 6, 7, 8, 9}`。
<dict> = {i: i**2 for i in range(1, 4)}           # 返回 `{1: 1, 2: 4, 3: 9}`。
```

```python
>>> [l+r for l in 'abc' for r in '123']           # 内部 loop 位于右侧。
['a1', 'a2', 'a3', ..., 'c3']
```

### Map, Filter, Reduce
```python
from functools import reduce
```

```python
<iter> = map(lambda x: x + 1, range(5))           # 返回 `iter([1, 2, 3, 4, 5])`。
<iter> = filter(lambda x: x > 5, range(10))       # 返回 `iter([6, 7, 8, 9])`。
<obj>  = reduce(lambda out, x: out+x, range(5))   # 返回 10，也接受 'initial'。
```

### Any, All
```python
<bool> = any(<collection>)                        # 是否至少有一个 element 满足 bool(<el>) 为 True？
<bool> = all(<collection>)                        # 是否所有 elements 都为 True？空 collection 也返回 True。
```

### Conditional Exp
```python
<obj> = <exp> if <condition> else <exp>           # 仅评估一个 expression。
```

```python
>>> [i if i else 'zero' for i in (0, 1, 2)]       # `any(['', [], None])` 是 False。
['zero', 1, 2]
```

### And, Or
```python
<obj> = <exp> and <exp> [and ...]                 # 返回第一个 false 或最后一个 obj。
<obj> = <exp> or <exp> [or ...]                   # 返回第一个 true 或最后一个 obj。
```

### Walrus Operator
```python
>>> [i for ch in '0123' if (i := int(ch))]        # 在 expression 中途给 variable 赋值。
[1, 2, 3]
```

### Named Tuple, Enum, Dataclass
```python
from collections import namedtuple
Point = namedtuple('Point', 'x y')                # 创建 tuple 的 subclass。
point = Point(0, 0)                               # 返回其 instance。

from enum import Enum
Direction = Enum('Direction', 'N E S W')          # 创建 Enum。
direction = Direction.N                           # 返回其 member。

from dataclasses import make_dataclass
Player = make_dataclass('Player', ['p', 'd'])     # 创建正常的 class。
player = Player(point, direction)                 # 返回其 instance。
```


Import
------
**使一个文件能够使用另一个文件中代码的机制。**

```python
import <module>                      # 导入内置 module 或 `<module>.py`。
import <package>                     # 内置package或`<package>/__init__.py`。
import <package>.<module>            # Package 的 module 或 `<package>/<module>.py`。
from <pkg/mod>[.…] import <obj>      # 导入 module、class、func 或 variable。
```
* **Package 由多个 modules 组成，也可以定义自己的 functions、variables 等。在 filesystem 上，它对应一个包含 Python 文件的目录，可以附带 init script。**
* **`'import <package>'` 只会公开在 `'__init__.py'` 内 import 的 modules。**
* **传给 python 命令的文件所在目录，是本地 imports 的根目录。**
* **若项目有分散的入口，使用 relative imports：`'from .[…][<pkg/mod>[.…]] import <obj>'`。另一种方式是将代码移到 'src' 目录，在项目根目录添加 ['pyproject.toml'](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/#basic-information)，再运行 `'$ pip3 install -e .'` 安装整个项目。**


Closure
-------
**在 Python 中，若 nested function 引用了外层 function 的 value，而外层 function 又返回了这个 nested function，就形成了 closure。多个 nested functions 引用的同一 value 会被共享。**

```python
def get_multiplier(a):
    def out(b):
        return a * b
    return out
```

```python
>>> mul_by_3 = get_multiplier(3)
>>> mul_by_3(10)
30
```

### Partial
**Partial 通过预先保存部分或全部 arguments 来包装 function。需要将 function 作为 argument 传递时很有用，例如 `'collections.defaultdict(<func>)'`、`'iter(<func>, to_exc)'` 和 `'dataclasses.field(default_factory=<func>)'`。**

```python
def mul(a, b):
    return a * b
```

```python
>>> import functools as ft
>>> mul_by_3 = ft.partial(mul, 3)
>>> mul_by_3(10)
30
```

### Non-Local
**只要 variable 在 scope（即 function body）内的任意位置被赋值，就会被视为 local variable，除非在首次使用前声明为 `'global'` 或 `'nonlocal'`。**

```python
def get_counter():
    i = 0
    def out():
        nonlocal i
        i += 1
        return i
    return out
```

```python
>>> counter = get_counter()
>>> counter(), counter(), counter()
(1, 2, 3)
```


Decorator
---------
**Decorator 接受 function，为其添加功能后返回。它可以是任意 [callable](#callable)，通常实现为返回 [closure](#closure) 的 function。**

```python
@decorator_name
def func_that_is_passed_to_dec():
    ...
```

### Debugger
**每次调用 function 时打印其名称。使用 `'@wraps'` decorator 将 metadata 从 func() 复制到 out()；否则 `'add.__name__'` 会返回 `'out'`。**

```python
from functools import wraps

def debug(func):
    @wraps(func)
    def out(*args, **kwargs):
        print(func.__name__)
        return func(*args, **kwargs)
    return out

@debug
def add(x, y):
    return x + y
```

### Cache
**保存 function 的 return values 并在后续调用中复用。用 `'<func>.cache_clear()'` 清空 cache，或改用 `'@lru_cache(maxsize=<int>)'` decorator。**

```python
from functools import cache

@cache
def fibonacci(n):
    return n if n < 2 else fibonacci(n-2) + fibonacci(n-1)
```
* **CPython interpreter 默认将 recursion depth 限制为 3000。**
* **使用 `'sys.setrecursionlimit(<int>)'` 提高此限制。**

### Debug with Args
**打印 function 名称，并可选择打印结果的 decorator。**
```python
from functools import wraps

def debug(print_result=False):
    def decorator(func):
        @wraps(func)
        def out(*args, **kwargs):
            print(func.__name__)
            res = func(*args, **kwargs)
            if print_result:
                print(res)
            return res
        return out
    return decorator

@debug(print_result=True)
def add(x, y):
    return x + y
```
* **这里不能直接使用不带 arguments 的 `'@debug'`，否则 add() 会被传给 'print_result' argument。可将定义改为 `'def debug(fn=None, *, ...)'`，并以 `'return decorator(fn) if fn else decorator'` 作为最后一行。**


Class
-----
**用于创建自定义 objects 的模板。**

```python
class MyClass:
    def __init__(self, a):
        self.a = a
    def __str__(self):
        return str(self.a)
    def __repr__(self):
        class_name = self.__class__.__name__
        return f'{class_name}({self.a!r})'

    @classmethod
    def get_class_name(cls):
        return cls.__name__
```

```python
>>> obj = MyClass(1)
>>> obj.a, str(obj), repr(obj)
(1, '1', 'MyClass(1)')
```
* **名称以两个下划线开头并结尾的 methods 称为 special methods。**
* **当 object 被传给 built-in function 或作为 operand 使用时，会调用这些 methods。例如 `'print(a)'` 调用 `'a.__str__()'`，`'a + b'` 调用 `'a.__add__(b)'`。**
* **各 operators 调用的 special methods 名称见 [operator](#operator) module。**
* **用 `'@staticmethod'` 装饰的 methods 不会收到 'self' 或 'cls' argument。**
* **str() special method 的 return value 应便于阅读，repr() 的结果则应无歧义。<br>如果只提供了 repr()，对 str() special method 的调用会转交给 repr()。**

<h4 id="expressionsthatcallstrspecialmethod">调用 str() special method 的 expressions：</h4>
```python
f'{obj}'
str(obj)
print(obj)
```

<h4 id="expressionsthatcallreprspecialmethod">调用 repr() special method 的 expressions：</h4>
```python
f'{obj!r}'
str/repr/print([obj])
str/repr/print({obj: obj})
str/repr/print(MyDataClass(obj))
```

### Subclass
* **Inheritance 允许一个 class 扩展另一个 class，即 subclass 扩展其 parent，并继承其所有 methods 和 attributes。**
* **Subclass 可以添加自己的 methods 和 attributes，也可以通过使用相同名称来 override 继承的成员。**

```python
class Person:
    def __init__(self, name):
        self.name = name
    def __repr__(self):
        return f'Person({self.name!r})'
    def __lt__(self, other):
        return self.name < other.name

class Employee(Person):
    def __init__(self, name, staff_num):
        super().__init__(name)
        self.staff_num = staff_num
    def __repr__(self):
        return f'Employee({self.name!r}, {self.staff_num})'
```

```python
>>> people = [Person('Bob'), Employee('Ann', 0)]
>>> sorted(people)
[Employee('Ann', 0), Person('Bob')]
```

### Type Annotations
**供 [mypy](https://pypi.org/project/mypy/) 和 [Pydantic](https://pypi.org/project/pydantic/) 等 type checkers 使用，CPython interpreter 不会强制检查。Function annotation 的写法为 `'def f(a: int = 0) -> int: ...'`。**
```python
from collections.abc import *

<name>: <type> [| ...] [= <obj>]
<name>: list/set/Iterable/Sequence[<type>] [= <obj>]
<name>: tuple/dict[<type>, ...] [= <obj>]
```

### Dataclass
**根据 class variables 自动生成 init()、repr() 和 eq() special methods。**
```python
import dataclasses as dc
```

```python
@dc.dataclass(order=False, frozen=False)
class MyClass:
    <attr_name>: <type>
    <attr_name>: <type> = <obj>
    <attr_name>: list = dc.field(default_factory=list)
```
* **使用 `'order=True'` 使 object [sortable](#sortable)，使用 `'frozen=True'` 使其 immutable。**
* **要使 object [hashable](#hashable)，所有 attributes 都必须 hashable，且 `'frozen'` 必须为 `'True'`。**
* **需要使用 field()，因为 `'<attr_name>: list = []'` 会创建由所有 instances 共享的 list。其 'default_factory' argument 接受任意 [callable](#callable) object。**
* **任意 type 的 attributes 和 arguments 可用 `'<attr_name>: typing.Any'` 标注。**

<h4 id="inline-1">Inline：</h4>
```python
P = dc.make_dataclass('P', ['x', 'y'])
P = dc.make_dataclass('P', [('x', float), ('y', float)])
P = dc.make_dataclass('P', [('x', float, 0), ('y', float, 0)])
```

### Property
**实现 getters 和 setters 的 Pythonic 方式。**
```python
class Person:
    @property
    def name(self):
        return ' '.join(self._name)

    @name.setter
    def name(self, value):
        self._name = value.split()
```

```python
>>> person = Person()
>>> person.name = '\t Guido  van Rossum \n'
>>> person.name
'Guido van Rossum'
```

### Slots
**将 object 限制为只包含指定 attributes 的机制。**

```python
class Point:
    __slots__ = ('x', 'y')
```

### Copy
```python
from copy import copy, deepcopy
<object> = copy/deepcopy(<object>)
```


Duck Types
----------
**Duck type 是一种隐式 type，规定了一组 special methods。任何实现了这些 methods 的 object 都被视为属于该 duck type。**

### Comparable
* **如果未 override eq() method，它会返回 `'id(self) == id(other)'`，等价于 `'self is other'`。因此不同的自定义 objects 默认不相等，因为 id() 返回唯一的 object 内存地址。**
* **通常只调用左侧 object 的 eq() method；若返回 NotImplemented，才尝试右侧 object。两者都返回 NotImplemented 时，结果为 False。**
* **定义了 eq() 的 object 自动支持 ne() method（由 `'!='` 调用）。**

```python
class MyComparable:
    def __init__(self, a):
        self.a = a
    def __eq__(self, other):
        if isinstance(other, type(self)):
            return self.a == other.a
        return NotImplemented
```

### Hashable
* **Hashable object 需要 hash() 和 eq() methods，且 hash value 必须始终不变。**
* **比较结果相等的 hashable objects 必须具有相同的 hash value，所以默认返回 `'id(self)'` 的 hash() 不适用。因此，只实现 eq() 时，Python 会自动将 class 设为 unhashable。**

```python
class MyHashable:
    def __init__(self, a):
        self._a = a
    @property
    def a(self):
        return self._a
    def __eq__(self, other):
        if isinstance(other, type(self)):
            return self.a == other.a
        return NotImplemented
    def __hash__(self):
        return hash(self.a)
```

### Sortable
* **使用 'total_ordering' decorator 时，只需实现 eq() 以及 lt()、gt()、le()、ge() 中的一个 special method（分别由 <、>、<=、>= 调用），其余会自动生成。**
* **Built-in functions sorted() 和 min() 只需要 lt() method，max() 只需要 gt()。不过最好全部定义，以免在其他场景中产生歧义。**
* **比较两个 lists、strings 或 dataclasses 时，会逐项比较 values，直到找到不相等的一对，再返回这两个 values 的比较结果。若所有对应 values 都相等，较短的 sequence 更小。**
* **先运行 `'locale.setlocale(locale.LC_COLLATE, "en_US.UTF-8")'`，再向 sorted() 传入 `'key=locale.strxfrm'`，即可按正确的字母顺序排列 strings。**

```python
from functools import total_ordering

@total_ordering
class MySortable:
    def __init__(self, a):
        self.a = a
    def __eq__(self, other):
        if isinstance(other, type(self)):
            return self.a == other.a
        return NotImplemented
    def __lt__(self, other):
        if isinstance(other, type(self)):
            return self.a < other.a
        return NotImplemented
```

### Iterator
* **同时拥有 next() 和 iter() special methods 的 object 就是 iterator。**
* **next() 应返回下一个 item，或抛出 StopIteration exception。**
* **iter() 应返回原 iterator，即 'self' argument。**
* **拥有 iter() special method 的 object 可以用于 for loop。**
```python
class Counter:
    def __init__(self):
        self.i = 0
    def __next__(self):
        self.i += 1
        return self.i
    def __iter__(self):
        return self
```

```python
>>> counter = Counter()
>>> next(counter), next(counter), next(counter)
(1, 2, 3)
```

<h4 id="pythonhasmanydifferentiteratorobjects">Python 有多种 iterator objects：</h4>
* **[iter()](#iterator) function 返回的 sequence iterators，如 'list\_iterator'。**
* **[itertools](#iterator) module 返回的 objects，如 count、repeat 和 cycle。**
* **Generator [functions](#generator) 和 [expressions](#comprehensions) 返回的 generator objects。**
* **[open()](#open) function 返回的 file objects、[SQLite](#sqlite) cursor objects 等。**

### Callable
* **所有 functions 和 classes 都有 call() method，在被调用时执行。**
* **使用 `'callable(<obj>)'` 或 `'isinstance(<obj>, collections.abc.Callable)'` 检查 object 是否 callable，用 `'inspect.signature(<obj>)'` 获取 arguments 信息。**
* **本文将 `'<function>'` 写作 argument 时，实际指 `'<callable>'`。**
```python
class Counter:
    def __init__(self):
        self.i = 0
    def __call__(self, step):
        self.i += step
        return self.i
```

```python
>>> counter = Counter()
>>> counter(1), counter(1), counter(1)
(1, 2, 3)
```

### Context Manager
* **With statement 只适用于拥有 enter() 和 exit() special methods 的 objects。**
* **enter() 应锁定资源，并可返回 object（如 file、socket 等）。**
* **exit() 应释放资源，例如关闭文件、释放 lock 等。**
* **with block 中发生的 exception 会传给 exit() method。exit() 返回 true value（而非 None、False、0 等）即可抑制该 exception。**
```python
class MyOpen:
    def __init__(self, filename):
        self.filename = filename
    def __enter__(self):
        self.file = open(self.filename)
        return self.file
    def __exit__(self, exc_type, exception, traceback):
        self.file.close()
```

```python
>>> with open('test.txt', 'w') as file:
...     file.write('Hello World!')
>>> with MyOpen('test.txt') as file:
...     print(file.read())
Hello World!
```


Iterable Duck Types
-------------------
### Iterable
* **只需实现 iter() special method，返回遍历 object 中 items 的 iterator。**
* **定义了 iter() 的 object 自动支持 contains() special method。**
```python
class MyIterable:
    def __init__(self, a):
        self.a = a
    def __iter__(self):
        return iter(self.a)
    def __contains__(self, el):
        return el in self.a
```

```python
>>> obj = MyIterable([1, 2, 3])
>>> [el for el in obj]
[1, 2, 3]
>>> 1 in obj
True
```

### Collection
* **只需实现 iter() 和 len() methods；len() 应返回 collection 的长度。**
* **本文把所有 iterable objects 都称为 collections，这在技术上并不准确。选择 collection 是因为 iterable 听起来更抽象。这样做的主要问题是：读者可能误以为某些 functions 不接受 iterators，尽管实际上接受，因为 iterators 是内置 objects 中 iterable 但并非 collection 的一类。**
```python
class MyCollection:
    def __init__(self, a):
        self.a = a
    def __iter__(self):
        return iter(self.a)
    def __contains__(self, el):
        return el in self.a
    def __len__(self):
        return len(self.a)
```

### Sequence
* **只需实现 len() 和 getitem() methods。getitem() 应返回指定 index 处的 item，或抛出 IndexError；也可以支持负数 indices 和 slices。**
* **定义了 getitem() 的 object 自动支持 iter() 和 contains()。**
* **定义了 len() 和 getitem() 的 object 自动支持 reversed()，返回反向遍历其 items 的 iterator。**
```python
class MySequence:
    def __init__(self, a):
        self.a = a
    def __iter__(self):
        return iter(self.a)
    def __contains__(self, el):
        return el in self.a
    def __len__(self):
        return len(self.a)
    def __getitem__(self, i):
        return self.a[i]
    def __reversed__(self):
        return reversed(self.a)
```

<h4 id="discrepanciesbetweenglossarydefinitionsandabstractbaseclasses">术语表定义与 abstract base classes 的差异：</h4>
* **Python [术语表](https://docs.python.org/3/glossary.html) 将拥有 iter() 或 getitem() special methods 的 object 定义为 iterable，将拥有 getitem() 和 len() 的 object 定义为 sequence；未定义 _collection_ 一词。**
* **将 [ABC](#abstract-base-classes) Iterable 用于 isinstance() 或 issubclass() 时，只检查 object/class 是否有 iter() special method；ABC Collection 则检查 iter()、contains() 和 len()。**

### ABC Sequence
* **相比基本 sequence，它提供更丰富的 interface，同样只要求实现 len() 和 getitem()。**
* **继承它后，会自动获得 iter()、contains()、reversed()、index() 和 count() special methods。**
* **与 `'abc.Iterable'`、`'abc.Collection'` 不同，它不是 duck type。因此，即使 MySequence 定义了所有 methods，`'issubclass(MySequence, abc.Sequence)'` 仍返回 False。不过 list、tuple、range、string、bytes、bytearray、array、memoryview 和 deque 已注册为 Sequence 的 virtual subclasses，因此能被识别。**
```python
from collections import abc

class MyAbcSequence(abc.Sequence):
    def __init__(self, a):
        self.a = a
    def __len__(self):
        return len(self.a)
    def __getitem__(self, i):
        return self.a[i]
```

<h4 id="requiredandautomaticallyavailablemethods">必需实现与自动提供的 methods：</h4>
```text
+--------------+------------+------------+------------+--------------+
|              |  Iterable  | Collection |  Sequence  | abc.Sequence |
+--------------+------------+------------+------------+--------------+
| __iter__     |    REQ     |    REQ     |    Yes     |     Yes      |
| __contains__ |    Yes     |    Yes     |    Yes     |     Yes      |
| __len__      |            |    REQ     |    REQ     |     REQ      |
| __getitem__  |            |            |    REQ     |     REQ      |
| __reversed__ |            |            |    Yes     |     Yes      |
| index        |            |            |            |     Yes      |
| count        |            |            |            |     Yes      |
+--------------+------------+------------+------------+--------------+
```
* **要使 `'isinstance(<obj>, abc.Iterable)'` 返回 True，必须实现 iter() method；但任何实现了 getitem() 的 object 都能用于接受 iterable 的代码。**
* **MutableSequence、Set、MutableSet、Mapping 和 MutableMapping ABCs 也支持继承。使用 `'<abc>.__abstractmethods__'` 获取必须实现的 methods 名称。**


Enum
----
**由具名 constants 组成的 class，这些 constants 称为 members。**

```python
from enum import Enum, auto
```

```python
class MyEnum(Enum):
    <member_name> = auto()             # 取上一个数字 value 加一；无上一个值时取 1。
    <member_name> = <value>            # Values 不必 hashable，也不必互不相同。
    <member_name> = <el>, <el>, ...    # Value 可以是 collection，例如 tuple。
```
* **调用 method 时，对应 member 会作为 'self' argument 传入。**
* **访问与保留 keyword 同名的 member 会抛出 SyntaxError。**

```python
<memb> = <enum>.<member_name>          # 通过 Enum 的 attribute 访问 member。
<memb> = <enum>['<member_name>']       # 返回 member，不存在时抛出 KeyError。
<memb> = <enum>(<value>)               # 返回 member，不存在时抛出 ValueError。
<str>  = <member>.name                 # 以 string 返回 member 的名称。
<obj>  = <member>.value                # Value 不能是用户自定义的function。
```

```python
<list> = list(<enum>)                  # 返回包含所有 members 的 list。
<list> = <enum>._member_names_         # 返回包含所有 member 名称的 list。
<list> = [m.value for m in <enum>]     # 返回包含成员 values 的 list。
```

```python
<enum> = type(<member>)                # 返回 Enum。也可用 <memb>.__class__。
<iter> = itertools.cycle(<enum>)       # 返回无穷无尽的 iterator 成员。
<memb> = random.choice(list(<enum>))   # 随机选择枚举的成员之一。
```

### Inline
```python
Cutlery = Enum('Cutlery', 'FORK KNIFE SPOON')
Cutlery = Enum('Cutlery', ['FORK', 'KNIFE', 'SPOON'])
Cutlery = Enum('Cutlery', {'FORK': 1, 'KNIFE': 2, 'SPOON': 3})
```

<h4 id="userdefinedfunctionscannotbevaluessotheymustbewrapped">自定义 functions 不能直接作为 values，需要先包装：</h4>
```python
import functools as ft
and_ = ft.partial(lambda l, r: l and r)
or_ = ft.partial(lambda l, r: l or r)
LogicOp = Enum('LogicOp', {'AND': and_, 'OR': or_})
```


Exceptions
----------
```python
try:
    <code>
except <exception>:
    <code>
```

### Full Try Statement
```python
try:
    <code_1>
except <exception_a>:
    <code_2_a>
except <exception_b>:
    <code_2_b>
else:
    <code_2_c>
finally:
    <code_3>
```
* **只有 `'try'` block 未发生 exception 时，才执行 `'else'` block。**
* **`'finally'` block 总会执行，除非收到了 signal。**
* **已执行 blocks 中初始化的 variables，在后续 blocks 和 try statement 外也可见；只有 function block 会划分 scope。**
* **使用 `'signal.signal(signal_number, my_handler_function)'` 捕获 signals。**

### Catching Exceptions
```python
except <exception>: ...
except <exception> as <name>: ...
except (<exception>, ...) [as <name>]: ...
```
* **Except clause 也会捕获 subclasses，例如 `'except Exception:'` 可以捕获 `'OSError'`。**
* **使用 `'traceback.print_exc()'` 将完整错误信息打印到 stderr。**
* **使用 `'print(<name>)'` 将 exception 的原因（其 arguments）打印到 stdout。**
* **使用 `'logging.exception(<str>)'` 记录消息，并附上捕获到的 exception 的完整错误信息。Logger 配置见 [Logging](#logging)。**
* **`'sys.exc_info()'` 以 tuple 返回被捕获 exception 的 type、object 和 traceback。**

### Raising Exceptions
```python
raise <exception>
raise <exception>()
raise <exception>(<obj> [, ...])
```

<h4 id="reraisingcaughtexception">重新抛出捕获的 exception：</h4>
```python
except <exception> [as <name>]:
    ...
    raise
```

### Exception Object
```python
arguments = <name>.args
exc_type  = <name>.__class__
filename  = <name>.__traceback__.tb_frame.f_code.co_filename
func_name = <name>.__traceback__.tb_frame.f_code.co_name
line_str  = linecache.getline(filename, <name>.__traceback__.tb_lineno)
trace_str = ''.join(traceback.format_tb(<name>.__traceback__))
error_msg = ''.join(traceback.format_exception(*sys.exc_info()))
```

### Built-in Exceptions
```text
BaseException
 +- SystemExit                  # 调用 `sys.exit()` 时引发。有关详细信息，请参阅#Exit。
 +- KeyboardInterrupt           # 用户按下中断键（如 `ctrl-c`）时抛出。
 +- Exception                   # 用户定义的exceptions应该从此class派生。
      +- ArithmeticError        # ZeroDivisionError 等 arithmetic errors 的 base class。
      +- AssertionError         # 如果 expression 返回 false value，则由 `assert <exp>` 引发。
      +- AttributeError         # 当 object 没有请求 attribute/method 时引发。
      +- EOFError               # 当遇到文件结束条件时，由 `input()` 引发。
      +- LookupError            # Collection 找不到 item 时所抛出 errors 的 base class。
      |   +- IndexError         # 当序列 (list/str) 的 index 超出 range 时引发。
      |   +- KeyError           # 当 dictionary 的 key 或 set element 丢失时引发。
      +- MemoryError            # 内存不足；此时再删除 variables 可能已来不及。
      +- NameError              # 使用不存在的名称 (variable/func/class) 时引发。
      |   +- UnboundLocalError  # 在 local variable 定义前使用它时抛出。
      +- OSError                # FileExistsError 和 TimeoutError 等错误。请参阅#Open。
      |   +- ConnectionError    # BrokenPipeError 和 ConnectionAbortedError 等错误。
      +- RuntimeError           # 由不属于其他类别的错误引发。
      |   +- NotImplementedEr…  # 可由 abstract methods 或尚未完成的代码抛出。
      |   +- RecursionError     # 如果超过最大 recursion 深度（默认为 3k），则引发该错误。
      +- StopIteration          # 向 next() 传入已耗尽的 iterator 时抛出。
      +- TypeError              # 当错误的 type 的 argument 传递给 function 时引发。
      +- ValueError             # 当它具有正确的 type 但不合适的 value 时引发。
```

<h4 id="exceptionsraisedbycollections">Collections 可能抛出的 exceptions：</h4>
```text
+-----------+------------+------------+------------+
|           |   <list>   |   <set>    |   <dict>   |
+-----------+------------+------------+------------+
| [i/key]   | IndexError |            |  KeyError  |
| .pop()    | IndexError |  KeyError  |  KeyError  |
| .remove() | ValueError |  KeyError  |            |
| .index()  | ValueError |            |            |
+-----------+------------+------------+------------+
```

<h4 id="usefulbuiltinexceptions">常用 built-in exceptions：</h4>
```python
raise TypeError('Function received argument of the wrong type!')
raise ValueError('Argument has right type but its value is off!')
raise RuntimeError('I am too lazy to define my own exception!')
```

### User-defined Exceptions
```python
class MyError(Exception): pass
class MyInputError(MyError): pass
```


Exit
----
**通过抛出 SystemExit exception 退出 interpreter。**
```python
import sys
sys.exit()                     # 退出并显示 exit code 0（成功）。
sys.exit(<int>)                # 以传递的 exit code 退出。
sys.exit(<obj>)                # 打印到 stderr 并以 1 退出。
```


Print
-----
```python
print(<obj>, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
```
* **使用 `'file=sys.stderr'` 或 `'sys.stderr.write(<str>)'` 输出错误信息。**
* **Stdout 和 stderr streams 会将输出保存在 buffer 中，直到收到含 '\n' 或 '\r' 的 string、buffer 达到 4096 个字符、使用 `'flush=True'`，或程序退出。**

### Pretty Print
```python
from pprint import pprint
pprint(<collection>, width=80, depth=None, compact=False)
```
* **若 collection 超过 'width' 个字符，每个 item 会单独占一行。**
* **达到 `'depth=<int>'` 层的嵌套 collections 显示为 `'...'`。**


Input
-----
```python
<str> = input()
```
* **从用户输入或 pipe 中读取一行，并去掉末尾的 newline。**
* **若传入 argument，会先将其打印到 stdout，再读取输入。**
* **用户输入 EOF（ctrl-d/ctrl-z⏎）或 stream 已耗尽时，会抛出 EOFError。**


Arguments
---------
```python
import sys
scripts_path = sys.argv[0]
arguments    = sys.argv[1:]
```

### Argument Parser
```python
from argparse import ArgumentParser
p = ArgumentParser(description=<str>)                      # 也接受 'usage' str。
p.add_argument('-<chr>', '--<name>', action='store_true')  # 标志（默认为 False）。
p.add_argument('-<chr>', '--<name>', type=<type>)          # 选项（默认为 None）。
p.add_argument('<name>', type=<type>, nargs=1)             # 必需的第一个 argument。
p.add_argument('<name>', type=<type>, nargs='+')           # 必需的其余 arguments。
p.add_argument('<name>', type=<type>, nargs='?')           # 可选 argument。也可用 *。
args  = p.parse_args()                                     # 因解析错误而退出。
<obj> = args.<name>                                        # 返回 `<type>(<arg>)`。
```
* **使用 `'help=<str>'` 设置 `'-h'` 显示的 argument 说明。**
* **使用 `'default=<obj>'` 设置 option 或 argument 的 default value。**


Open
----
**打开文件，返回对应的 file object。**

```python
<file> = open(<path>, mode='r', encoding=None, newline=None)
```
* **`'encoding=None'` 使用平台相关的默认 encoding。建议显式使用 `'encoding="utf-8"'`，直到它成为默认值（Python 3.15）。**
* **`'newline=None'` 在读取时将各种行结束符转换为 '\n'；写入时将 '\n' 转换为系统默认的 separator。**
* **`'newline=""'` 不进行转换，但 readline() 仍按 '\n'、'\r' 和 '\r\n' 分行。传入 `'newline="\n"'` 时只按 '\n' 分行。**
* **`'newline="\r\n"'` 只按 '\r\n' 分行，写入时将每个 '\n' 转换为 '\r\n'。**

### Modes
* **`'r'` — 读取文本（默认）。**
* **`'w'` — 写入文件，删除原有内容。**
* **`'x'` — 创建并写入；文件已存在时抛出 FileExistsError。**
* **`'a'` — 追加写入；文件不存在时创建。**
* **`'w+'` — 读写文件，删除原有内容。**
* **`'r+'` — 从文件开头读写。**
* **`'a+'` — 从文件末尾读写。**
* **`'rb'` — 读取 [bytes objects](#bytes)；也可用 `'wb'`、`'xb'` 等。**

### Exceptions
* **用 `'r'` 或 `'r+'` 读取时可能抛出 `'FileNotFoundError'`。**
* **用 `'x'` 写入时可能抛出 `'FileExistsError'` exception。**
* **所有模式都可能抛出 `'IsADirectoryError'` 或 `'PermissionError'`。**
* **`'except OSError [as <name>]: …'` 可捕获以上所有 exceptions。**

### File Object
```python
<file>.seek(0)                    # 将当前位置移动到文件的开头。
<file>.seek(offset)               # 从文件开头移动 'offset' 个字符或 bytes。
<file>.seek(0, 2)                 # 将当前位置移动到文件末尾。
<b_file>.seek(±offset, origin)    # Origin：0 表示开头，1 表示当前位置，2 表示末尾。
```

```python
<obj>  = <file>.read(size=-1)     # 读取 'size' 个字符或 bytes，或读到 EOF 为止。
<obj>  = <file>.readline()        # 在 EOF 上返回一行或空 string/bytes。
<list> = <file>.readlines()       # 返回剩余行。还有list(<file>)。
<obj>  = next(<file>)             # 使用预读 buffer 返回一行。
```

```python
<file>.write(<obj>)               # 将 str 或 bytes object 写入 write buffer。
<file>.writelines(<coll>)         # 写入由 strings 或 bytes objects 组成的 collection。
<file>.flush()                    # 刷新 write buffer，通常每 4096/8192 B 自动执行。
<file>.close()                    # 刷新写入 buffer 后关闭文件。
```
* **这些 methods 不会添加或移除末尾的 newline，writelines() 也不例外。**

### Read Text from File
```python
def read_file(filename):
    with open(filename, encoding='utf-8') as file:
        return file.readlines()
```

### Write Text to File
```python
def write_to_file(filename, text):
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(text)
```


Paths
-----
```python
import os, glob
from pathlib import Path
```

```python
<str>  = os.getcwd()                # 返回工作目录。开头为 shell 的 `$PWD`。
<str>  = os.path.join(<path>, ...)  # 使用 `os.sep` 连接 strings 或 Path objects。
<str>  = os.path.realpath(<path>)   # 解析符号链接并调用 os.path.abspath()。
```

```python
<str>  = os.path.basename(<path>)   # 返回最终组件（文件名或目录名）。
<str>  = os.path.dirname(<path>)    # 返回不带最终组件的路径。
<tup.> = os.path.splitext(<path>)   # 按最后一个路径部分中的最后一个句点拆分。
```

```python
<list> = os.listdir(path='.')       # 返回 'path' 下所有文件和目录的名称。
<list> = glob.glob('<pattern>')     # 返回与通配符模式匹配的路径。
```

```python
<bool> = os.path.exists(<path>)     # 检查路径是否存在。还有<Path>.exists()。
<bool> = os.path.isfile(<path>)     # 也可用 <Path>.is_file(), <DirEntry>.is_file().
<bool> = os.path.isdir(<path>)      # 也可用 <Path>.is_dir() and <DirEntry>.is_dir().
```

```python
<stat> = os.stat(<path>)            # 状态 object。还有<Path/DirEntry>.stat()。
<num>  = <stat>.st_size/st_mtime/…  # 返回以 bytes 为单位的大小、修改时间等信息。
```

### DirEntry
**与 listdir() 不同，scandir() 返回 DirEntry objects，会缓存 isfile、isdir，以及 Windows 上的 stat 信息，显著提升需要这些信息的代码的性能。**

```python
<iter> = os.scandir(path='.')       # 返回位于路径的 DirEntry objects。
<str>  = <DirEntry>.path            # 如果传入的 'path' argument 是 absolute path，结果也是。
<str>  = <DirEntry>.name            # 返回路径的最终组件为 string。
<file> = open(<DirEntry>)           # 打开文件并返回其文件 object。
```

### Path Object
```python
<Path> = Path(<path> [, ...])       # 接受 strings、Path objects 和 DirEntry objects。
<Path> = <path> / <path> [/ ...]    # 第一个或第二个 object 必须是 Path object。
<Path> = <Path>.resolve()           # 返回带有已解析符号链接的绝对路径。
```

```python
<Path> = Path()                     # 返回当前工作目录。还有Path('.')。
<Path> = Path.cwd()                 # 返回 absolute CWD。也可用 Path().resolve()。
<Path> = Path.home()                # 返回用户的绝对主目录。
<Path> = Path(__file__)             # 使用resolve()获取module的绝对路径。
```

```python
<Path> = <Path>.parent              # 返回不带最终组件的路径。
<str>  = <Path>.name                # 返回最终组件（i.e.file/dirname）。
<str>  = <Path>.suffix              # 返回名称的最后一个带点的扩展名。
<str>  = <Path>.stem                # 返回不带最后扩展名的名称。
<tup.> = <Path>.parts               # 如果路径是绝对路径，则以“/”或“C:\”开头。
```

```python
<iter> = <Path>.iterdir()           # 以 Path objects 返回目录内容。
<iter> = <Path>.glob('<patt>')      # 返回与通配符模式匹配的路径。
```

```python
<str>  = str(<Path>)                # 返回路径为 string。还有<Path>.as_uri()。
<file> = open(<Path>)               # 也可用 <Path>.read_text/write_bytes/…(<args>).
```


OS Commands
-----------
```python
import os, shutil as sh
```

```python
os.chdir(<path>)               # 更改当前工作目录（或 CWD）。
os.mkdir(<path>)               # 创建目录。通过 `mode=0o777` 设置 permissions。
os.makedirs(<path>)            # 创建所有路径的目录。还有`exist_ok=False`。
```

```python
sh.copy(from, to)              # 复制文件；'to' argument 可以已存在或指向目录。
sh.copy2(from, to)             # 还复制创建和修改时间。
sh.copytree(from, to)          # 复制目录；'to' argument 不应已存在。
```

```python
os.rename(from, to)            # 重命名或移动文件或目录 'from'。
os.replace(from, to)           # 与上项相同，但在 Windows 上也会覆盖文件 'to'。
sh.move(from, to)              # 类似 `rename()`；若 'to' 为目录，则移动到该目录内。
```

```python
os.remove(<path>)              # 删除文件。还有`$ pip3 install send2trash`。
os.rmdir(<path>)               # 删除空目录；非空时抛出 OSError。
sh.rmtree(<path>)              # 删除目录及其所有内容。
```
* **传入的 paths 可以是 strings、Path objects 或 DirEntry objects。**
* **Functions 通过抛出 OSError 或其 [subclasses](#exceptions-1) 报告错误。**


Shell Commands
--------------
```python
import os, subprocess as sp
```

```python
<int>  = os.system('<cmds>')    # 在 sh/cmd shell 中运行命令。打印结果。
<proc> = sp.run(<str/list>)     # 对于 parameters，请参阅示例。默认打印。
<pipe> = os.popen('<cmds>')     # 只打印 stderr，自 3.14 起为 soft deprecated。
<str>  = <pipe>.read()          # 返回组合的 stdout。提供readline/s()。
<int>  = <pipe>.close()         # 最后一条命令的 returncode 为 0 时返回 None。
```

<h4 id="sends11tothebasiccalculatorandcapturesitsstdoutandstderrstreams">向计算器发送 "1+1"，并捕获其 stdout 和 stderr streams：</h4>
```python
>>> sp.run('bc', input='1+1\n', capture_output=True, text=True)
CompletedProcess(args='bc', returncode=0, stdout='2\n', stderr='')
```

<h4 id="sendstestintobcrunninginstandardmodeandsavesitsstdouttotestout">将 test.in 传给以 standard mode 运行的 <code>bc</code>，并将 stdout 保存到 test.out：</h4>
```python
>>> if os.system('echo 1+1 > test.in') == 0:
...     with open('test.in') as in_, open('test.out', 'w') as out:
...         sp.run(shlex.split('bc -s'), stdin=in_, stdout=out)
...     print(open('test.out').read())
2
```


JSON
----
```python
import json
<str>  = json.dumps(<list/dict>)  # 将 collection 转换为 JSON string。
<coll> = json.loads(<str>)        # 将 JSON string 转换为 collection。
```

### Read Collection from JSON File
```python
def read_json_file(filename):
    with open(filename, encoding='utf-8') as file:
        return json.load(file)
```

### Write Collection to JSON File
```python
def write_to_json_file(filename, coll):
    with open(filename, 'w', encoding='utf-8') as file:
        json.dump(coll, file, ensure_ascii=False, indent=2)
```


Pickle
------
```python
import pickle
<bytes>  = pickle.dumps(<object>)  # 将 object 转换为 bytes object。
<object> = pickle.loads(<bytes>)   # 将 bytes object 转换为 object。
```

### Read Object from Pickle File
```python
def read_pickle_file(filename):
    with open(filename, 'rb') as file:
        return pickle.load(file)
```

### Write Object to Pickle File
```python
def write_to_pickle_file(filename, an_object):
    with open(filename, 'wb') as file:
        pickle.dump(an_object, file)
```


CSV
---
**用于保存 spreadsheet 的文本文件格式。**

```python
import csv
```

```python
<file> = open(<path>, newline='')              # 打开文本文件进行读取。
<read> = csv.reader(<file>, 'excel')           # 也接受 `delimiter=','`，见 Params。
<list> = next(<read>)                          # 以 strings 的 list 返回一行。
<list> = list(<read>)                          # 返回剩余行的 list。
```
* **XML 和 binary Excel 文件（xlsx、xlsm、xlsb）可用 [Pandas](#file-formats) library 处理。**
* **使用 [Tabulate](#table) 或 PrettyTable library 将 spreadsheet 整齐地打印到 console。**
* **Reader 接受由 strings 组成的任意 iterator 或 collection，不限于文本文件。**

### Write
```python
<file>  = open(<path>, 'a', newline='')        # 打开文本文件进行写入。
<write> = csv.writer(<file>, 'excel')          # 也接受 `delimiter=','`，见 Params。
<write>.writerow(<collection>)                 # 使用 str(<obj>) 编码 objects。
<write>.writerows(<coll_of_coll>)              # 将行追加到打开的文件中。
```
* **始终向 open() 传入 `'newline=""'`，否则带引号字段中的 newline 可能在 '\n' 与 '\r\n' 之间转换，有时 '\r\n' 甚至变成 '\r\r\n'。此外，行末也无法按传入或 dialect 定义的 `'lineterminator'` parameter 输出。**
* **使用 `'mode="a"'` 打开现有文件以追加，使用 `'mode="w"'` 覆盖。**

### Params
* **`'dialect'` — 统一设置 default values 的 parameter；接受 string 或 _csv.Dialect_ object。**
* **`'delimiter'` — 用于分隔字段的单字符 string，如逗号、tab 或分号。**
* **`'lineterminator'` — 设置 writer 的行结束符；reader 识别 '\n'、'\r' 和 '\r\n'。**
* **`'quotechar'` — 为包含 delimiter、quotechar、'\n' 或 '\r' 的字段加引号所用的字符。**
* **`'escapechar'` — 用于转义 quotechar 的字符；doublequote 为 True 时可设为 None。**
* **`'doublequote'` — 字段内的 quotechar 是否以重复两次的方式表示，而非转义。**
* **`'quoting'` — 0：按需；1：全部；2：除数字外全部，数字读为 floats；3：不加引号。**
* **`'skipinitialspace'` — reader 是否去掉字段开头的空格。**

### Dialects
```text
+------------------+--------------+--------------+--------------+
|                  |     excel    |   excel-tab  |     unix     |
+------------------+--------------+--------------+--------------+
| delimiter        |       ','    |      '\t'    |       ','    |
| lineterminator   |    '\r\n'    |    '\r\n'    |      '\n'    |
| quotechar        |       '"'    |       '"'    |       '"'    |
| escapechar       |      None    |      None    |      None    |
| doublequote      |      True    |      True    |      True    |
| quoting          |         0    |         0    |         1    |
| skipinitialspace |     False    |     False    |     False    |
+------------------+--------------+--------------+--------------+
```

### Read Rows from CSV File
```python
def read_csv_file(filename, **csv_params):
    with open(filename, encoding='utf-8', newline='') as file:
        return list(csv.reader(file, **csv_params))
```

### Write Rows to CSV File
```python
def write_to_csv_file(filename, rows, mode='w', **csv_params):
    with open(filename, mode, encoding='utf-8', newline='') as file:
        writer = csv.writer(file, **csv_params)
        writer.writerows(rows)
```


SQLite
------
**无需独立 server 的 database engine，每个 database 保存为一个文件。**

```python
import sqlite3
<con> = sqlite3.connect(<path>)        # 打开现有或新建文件。也接受 ':memory:'。
<con>.close()                          # 关闭连接。丢弃未提交的数据。
```

### Read
```python
<cursor> = <con>.execute('SELECT …')   # 可能抛出 `sqlite3.Error` 的 subclass。
<tuple>  = <cursor>.fetchone()         # 返回下一行。与 next(<cursor>) 相同。
<list>   = <cursor>.fetchall()         # 返回剩余行。还有list(<cursor>)。
```

### Write
```python
<con>.execute('INSERT …')              # 可能抛出 `sqlite3.Error` 的 subclass。
<con>.commit()                         # 保存自上次提交以来的所有更改。
<con>.rollback()                       # 放弃自上次提交以来的所有更改。
```

<h4 id="or">或者：</h4>
```python
with <con>:                            # 使用 commit() 或 rollback() 退出块，
    <con>.execute('INSERT …')          # 取决于是否发生任何 exception。
```

### Params
```python
<con>.execute(<sql>, <list/tuple>)     # 用对应 item 替换每个 '?'。
<con>.execute(<sql>, <dict/namedtup>)  # 将每个 ':<key>' 替换为匹配的 value。
<con>.executemany(<sql>, <colls>)      # 对每个 collection 执行一次 statement。
```
* **接受 strings、ints、floats、bytes、None objects 和 bools（存为 1 或 0）。**
* **除非 table 声明为 strict，否则 columns 不受特定 type 限制。**

<h3 id="example-1">示例</h3>
**本例省略了 `'con.commit()'`，所以 values 并未真正保存！**
```python
>>> con = sqlite3.connect('test.db')
>>> con.execute('CREATE TABLE person (name TEXT, height INTEGER) STRICT')
>>> con.execute('INSERT INTO person VALUES (?, ?)', ('Jean-Luc', 187))
>>> con.execute('SELECT rowid, * FROM person').fetchall()
[(1, 'Jean-Luc', 187)]
```

### SQLAlchemy
**通过 SQL、[method chaining](https://docs.sqlalchemy.org/en/latest/tutorial/data_select.html#the-select-sql-expression-construct) 或 [ORM](https://docs.sqlalchemy.org/en/latest/orm/quickstart.html#simple-select) 操作各种 DB systems 的 library。**
```python
# $ pip3 install sqlalchemy
import sqlalchemy as sa
<eng> = sa.create_engine(<url>)        # URL 格式：'dialect://user:password@host/dbname'。
<con> = <eng>.connect()                # 创建新连接。还有<con>.close()。
<cur> = <con>.execute(sa.text(<sql>))  # 将 dict 添加到 execute() 以替换 ':<key>'。
with <con>.begin(): ...                # 退出 block 时执行 commit 或 rollback。
```

```text
+-----------------+--------------+----------------------------------+
| Dialect         | pip3 install |           Dependencies           |
+-----------------+--------------+----------------------------------+
| mysql           | mysqlclient  | www.pypi.org/project/mysqlclient |
| postgresql      | psycopg2     | www.pypi.org/project/psycopg2    |
| mssql           | pyodbc       | www.pypi.org/project/pyodbc      |
| oracle+oracledb | oracledb     | www.pypi.org/project/oracledb    |
+-----------------+--------------+----------------------------------+
```


Bytes
-----
**由单个 bytes 组成的 immutable sequence；mutable 版本称为 bytearray。**

```python
<bytes> = b'<str>'                   # 接受 ASCII 字符和 \x00 到 \xff。
<int>   = <bytes>[index]             # 将 byte 返回为 0 到 255 之间的 int。
<bytes> = <bytes>[<slice>]           # 即使有一个 element，也会返回 bytes。
<bytes> = <bytes>.join(<coll>)       # 使用 bytes 作为 sep 加入 bytes objects。
```

### Encode
```python
<bytes> = bytes(<ints>)              # 接受 0 到 255 之间的 integers 的 coll。
<bytes> = bytes(<str>, 'utf-8')      # 编码 string。与 <str>.encode() 相同。
<bytes> = bytes.fromhex('<hex>')     # 十六进制对可以用空格分隔。
<bytes> = <int>.to_bytes(n_bytes)    # 接受 `byteorder='little', signed=True`。
```

### Decode
```python
<list>  = list(<bytes>)              # 返回 0 到 255 之间的 ints 的 list。
<str>   = str(<bytes>, 'utf-8')      # 返回 string。与 <bytes>.decode() 相同。
<str>   = <bytes>.hex()              # 返回由 `sep=<str>` 分隔的十六进制对。
<int>   = int.from_bytes(<bytes>)    # 接受 `byteorder='little', signed=True`。
```


### Read Bytes from File
```python
def read_bytes(filename):
    with open(filename, 'rb') as file:
        return file.read()
```

### Write Bytes to File
```python
def write_bytes(filename, bytes_obj):
    with open(filename, 'wb') as file:
        file.write(bytes_obj)
```


Struct
------
* **在数字 sequence 与 bytes object 之间转换。**
* **默认使用系统的 type sizes、byte order 和 alignment 规则。**

```python
from struct import pack, unpack

<bytes> = pack('<format>', <num>, ...)  # 根据格式打包数字。
<tuple> = unpack('<format>', <bytes>)   # 使用 `iter_unpack()` 获取 tuples。
```

```python
>>> pack('>hhl', 1, 2, 3)
b'\x00\x01\x00\x02\x00\x00\x00\x03'
>>> unpack('bhh', b'\x01\x00\x02\x00\x03\x00')
(1, 2, 3)
```

### Format
<h4 id="forstandardtypesizesandmanualalignmentpaddingstartformatstringwith">使用 standard type sizes 和手动 alignment（padding）时，format string 应以下列字符开头：</h4>
* **`'='` — 系统的 byte order（通常为 little-endian）。**
* **`'<'` — Little-endian，即 least significant byte 在前。**
* **`'>'` — Big-endian，也可用 `'!'`。**

<h4 id="besidesnumberspackandunpackalsosupportbytesobjectsaspartofthesequence">除数字外，pack() 和 unpack() 也支持在 sequence 中包含 bytes objects：</h4>
* **`'c'` — 只有一个 element 的 bytes object；pad byte 使用 `'x'`。**
* **`'<n>s'` — 包含 n 个 elements 的 bytes object，不受 byte order 影响。**

<h4 id="integersunsignedtypesusecapitallettersminimumandstandardsizesareinbrackets">Integers：unsigned types 使用大写字母；括号中为最小及标准大小：</h4>
* **`'b'` - 字符 (1/1)**
* **`'h'` - 短 (2/2)**
* **`'i'` - int (2/4)**
* **`'l'` - 长 (4/4)**
* **`'q'`-长长(8/8)**

<h4 id="floatingpointtypesstructalwaysusesstandardsizes">Floating point types：struct 总是使用标准大小：</h4>
* **`'f'` - float (4/4)**
* **`'d'` - 双 (8/8)**


Array
-----
**只能存放符合指定 C type 的数字的 list。可用 types 及最小 byte sizes 见上表。Type sizes 和 byte order 总由系统决定；可调用 byteswap() method 反转每个 element 的 bytes 顺序。**

```python
from array import array
```

```python
<array> = array('<ctype>' [, <coll>])  # 创建 array，接受由数字组成的 collection。
<array> = array('<ctype>', <bytes>)    # 将传入的 bytes 复制到 array 的内存。
<array> = array('<ctype>', <array>)    # 将传递的 array 视为数字序列。
<array>.fromfile(<file>, n_items)      # 将文件内容追加到 array 的内存中。
```

```python
<bytes> = bytes(<array>)               # 以 bytes object 形式返回内存副本。
<file>.write(<array>)                  # 将 array 的内存附加到二进制文件。
```


Memory View
-----------
**指向另一个 bytes-like object 内存的 sequence object。每个 element 按 format 引用一个或多个连续 bytes；可通过 slicing 改变 elements 的顺序和数量。**

```python
<mview> = memoryview(<bytes/array>)  # 如果传递 array，则返回 mutable memoryview。
<obj>   = <mview>[index]             # 返回 int/float；format 为 'c' 时返回 bytes。
<mview> = <mview>[<slice>]           # 返回重新排列的 elements 的 memoryview。
<mview> = <mview>.cast('<ctype>')    # 仅适用于 B/b/c 和其他 types 之间。
<mview>.release()                    # 释放底层 object 的 memory buffer。
```

```python
<bytes> = bytes(<mview>)             # 返回新的 bytes object。还有bytearray()。
<bytes> = <bytes>.join(<coll>)       # 用 bytes 作为 separator 连接 memoryviews。
<array> = array('<ctype>', <mview>)  # 将传递的 mview 视为数字序列。
<file>.write(<mview>)                # 将 `bytes(<mview>)` 附加到二进制文件。
```

```python
<list>  = list(<mview>)              # 返回 ints、floats 或 bytes objects 中的 list。
<str>   = str(<mview>, 'utf-8')      # 将传递的 memoryview 视为 `bytes(<mview>)`。
<str>   = <mview>.hex()              # 返回以 `sep=<str>` 分隔的十六进制对。
```


Deque
-----
**支持从两端高效 append 和 pop 的 list。**

```python
from collections import deque
```

```python
<deque> = deque(<coll>)           # 传入 `maxlen=<int>` 设置大小上限。
<deque>.appendleft(<el>)          # 如果超过 maxlen，则删除最后一个 element。
<deque>.extendleft(<coll>)        # 将反转后的 collection 追加到 deque 左端。
<deque>.rotate(n=1)               # 将最后一个 element 移动到 deque 的开头。
<el> = <deque>.popleft()          # 删除并返回 deque 的第一个 element。
```


Operator
--------
**提供与 operators 对应功能的 functions 的 module。按 operator precedence 从低到高分组；第一行和第三行内部也按 precedence 排列。**
```python
import operator as op
```

```python
<bool> = op.not_(<obj>)                                    # or、and、not（缺少 or/and 对应的 functions）。
<bool> = op.eq/ne/lt/ge/is_/is_not/contains(<obj>, <obj>)  # ==, !=, <, >=, is, is not, in。
<obj>  = op.or_/xor/and_(<int/set>, <int/set>)             # |, ^, &（按 precedence 排序）。
<int>  = op.lshift/rshift(<int>, <int>)                    # <<, >>（即 <int> << n_bits）。
<obj>  = op.add/sub(<obj>, <obj>)                          # +, -（例如 'a' + 'b' == 'ab'）。
<obj>  = op.mul/truediv/floordiv/mod(<obj>, <obj>)         # *, /, //, %（从左向右求值）。
<num>  = op.neg/invert(<num>)                              # -, ~（negation 和 bitwise not）。
<num>  = op.pow(<num>, <num>)                              # **（pow() 接受 3 个 arguments）。
<func> = op.itemgetter/attrgetter/methodcaller(<obj>, …)   # [i/key], .attr_name, .name(…)。
```

```python
elementwise_sum  = map(op.add, list_a, list_b)
sorted_by_second = sorted(<coll>, key=op.itemgetter(1))
sorted_by_both   = sorted(<coll>, key=op.itemgetter(1, 0))
```
* **大多数 operators 会调用 object 上对应名称的 special method，并将另一个 object 作为 argument 传入；logical operators 则执行自身基于 bool() 的逻辑。**
* **`'and/or'` 可能不会对所有 operands 求值，因此不能用普通 function 模拟。**
* **比较可以串联：`'x < y < z'` 会转换为 `'(x < y) and (y < z)'`。**


Match Statement
---------------
**执行第一个匹配 pattern 的 block。**

```python
match <obj/expr>:
    case <pattern> [if <cond>]:
        <code>
    ...
```

### Patterns
```python
<val_patt> = 1/'a'/True/None/math.pi     # 与 literal 或 attribute 的 value 匹配。
<cls_patt> = <type>()                    # 匹配该 type（或 ABC）的任何 object。
<wildcard> = _                           # 匹配任意 object，适用于最后一个 case。
<capture>  = <name>                      # 匹配任何 object 并将其绑定到名称。
<as_patt>  = <pattern> as <name>         # 将匹配项绑定到名称。还有<type>(<name>)。
<or_patt>  = <pattern> | ...             # 如果任何列出的模式匹配则匹配。
<seq_patt> = [<pattern>, ...]            # 匹配一个序列。所有 items 必须匹配。
<map_patt> = {<val_patt>: <patt>, ...}   # 如果 items 匹配，则匹配 dict。
<cls_patt> = <type>(<name>=<patt>, ...)  # 将 object 与匹配的 attributes 相匹配。
```
* **Sequence pattern 也可写成 tuple，括号可以省略。**
* **在 sequence/mapping patterns 中使用 `'*<name>'` 和 `'**<name>'` 绑定剩余 items。**
* **可用括号改变 pattern 的 precedence：`'|'` > `'as'` > `','`。例如 `'[1, 2]'` 匹配 `'case 1|2, 2|3 as y if y == 2:'`。**
* **匹配 case 中绑定的名称及其 body 内初始化的 variables，在 match statement 后仍可见；只有 function block 会划分 scope。**

<h3 id="example-2">示例</h3>
```python
>>> from pathlib import Path
>>> match Path('/home/bwk/documents/README.md'):
...     case Path(
...         parts=['/', 'home', user, *_, name]
...     ) as p if p.is_file() and 'readme' in name.lower():
...         print(f"{name} is {user}'s readme file.")
README.md is bwk's readme file.
```


Logging
-------
```python
import logging as log
```

```python
log.basicConfig(filename=<path>)                # 配置 root logger，见 Setup。
log.debug/info/warning/error/critical(<str>)    # 将传入消息发送给 root logger。
<Logger> = log.getLogger(__name__)              # 返回以 module 名称命名的 logger。
<Logger>.<level>(<str>)                         # 发送消息。与上面相同的级别。
<Logger>.exception(<str>)                       # 附带捕获到的 exception 信息的 `error()`。
```

### Setup
```python
log.basicConfig(
  filename=None,                                # filename 为 None 时打印到 stderr。
  filemode='a',                                 # 使用 mode 'w' 覆盖现有文件。
  format='%(levelname)s:%(name)s:%(message)s',  # 使用 '%(asctime)s' 添加本地 datetime。
  level=log.WARNING,                            # 丢弃优先级较低的消息。
  handlers=[log.StreamHandler(sys.stderr)]      # 指定 'filename' 时使用 FileHandler。
)
```

```python
<Formatr> = log.Formatter('<format>')           # 使用 str 格式设置消息格式。
<Handler> = log.FileHandler(<path>, mode='a')   # 附加到文件。还有`encoding=None`。
<Handler>.setFormatter(<Formatter>)             # 默认情况下仅输出裸消息。
<Handler>.setLevel(<str/int>)                   # 默认情况下打印/保存每条消息。
<Logger>.addHandler(<Handler>)                  # Logger 可以有多个 handlers。
<Logger>.setLevel(<str/int>)                    # 决定哪些消息会发给自身及 ancestor loggers 的 handlers。
<Logger>.propagate = <bool>                     # 为 False 时，停止向 ancestor loggers 的 handlers 传播。
```
* **将 child logger 命名为 `'<parent_name>.<name>'`，即可指定 parent logger。**
* **若未通过 setLevel() method 设置 level，logger 会继承 parent 的 level。**
* **Format string 可包含 pathname、filename、funcName、lineno、thread 和 process。**
* **RotatingFileHandler 根据 'maxBytes' 和 'backupCount' arguments 轮换日志文件。**
* **可通过 addFilter() 将带有 `'filter(<LogRecord>)'` method 的 object 或该 method 本身添加到 loggers 和 handlers。filter() 返回 false value 时会丢弃消息。**
* **Libraries 生成的日志消息会传给 root logger 的 handlers。使用 `'log.getLogger("<library>").setLevel(<str>)'` 设置 library 的 logger level。**

<h4 id="loggerthatwritesmessagestoafileandsendsthemtotherootshandlerthatprintswarningsorhigher">将消息写入文件，同时交给 root handler 输出 warning 及以上级别消息的 logger：</h4>
```python
>>> logger = log.getLogger('my_module')
>>> handler = log.FileHandler('test.log', encoding='utf-8')
>>> format_str = '%(asctime)s %(levelname)s:%(name)s:%(message)s'
>>> handler.setFormatter(log.Formatter(format_str))
>>> logger.addHandler(handler)
>>> logger.setLevel('DEBUG')
>>> log.basicConfig()
>>> stream_handler = log.root.handlers[0]
>>> stream_handler.setLevel('WARNING')
>>> logger.critical('Missing config file.')
CRITICAL:my_module:Missing config file.
>>> print(open('test.log').read())
2023-02-07 23:21:01,430 CRITICAL:my_module:Missing config file.
```


Introspection
-------------
```python
<list> = dir()                       # objects 的本地名称，包括functions/classes。
<dict> = vars()                      # 本地名称及其 objects。与 locals() 相同。
<dict> = globals()                   # Global 名称及对应 objects，例如 __builtin__。
```

```python
<list> = dir(<obj>)                  # object的attributes的名称，包括methods。
<dict> = vars(<obj>)                 # 可写attributes的Dict。或 <obj>.__dict__。
<bool> = hasattr(<obj>, '<name>')    # 检查 object 是否包含指定名称的 attribute。
value  = getattr(<obj>, '<name>')    # 返回 object 的 attribute，不存在时抛出 AttributeError。
setattr(<obj>, '<name>', value)      # 只适用于含 `__dict__` attribute 的 objects。
delattr(<obj>, '<name>')             # 从 __dict__ 中删除。还有`del <obj>.<name>`。
```


Threading
---------
**Threads 是并发运行的 functions，共享 objects 时需谨慎。`'$ uv init --python 3.15t'` 可安装支持在多个 CPU cores 上运行 threads 的 interpreter。**

```python
import threading as th, queue as qu
import concurrent.futures as cf
```

### Thread
```python
<Thread> = th.Thread(target=<func>)     # 通过 `args=<coll>` 设置 function 的 arguments。
<Thread>.start()                        # 在后台运行 function。还有is_alive()。
<Thread>.join()                         # 等待 function 完成执行。
```
* **使用 `'kwargs=<dict>'` 向 function（即 thread 执行的 function）传递 keyword arguments。**
* **使用 `'daemon=True'`，否则 thread 仍在运行时程序无法退出。**

### Lock
```python
<lock> = th.Lock/RLock()                # RLock 只能由获取它的 thread 释放。
<lock>.acquire()                        # 等待/阻止，直到 lock 变得可用。
<lock>.release()                        # 释放 lock，以便可以再次获取它。
```

<h4 id="or-1">或者：</h4>
```python
with <lock>:                            # 通过调用 method acquire() 进入块。
    ...                                 # 通过调用 release() 退出它，即使出现错误也是如此。
```

### Sync Objects
```python
<Semaphr> = th.Semaphore(value=1)       # 可同时由 value 个 threads 获取的 lock。
<Event>   = th.Event()                  # `<Event>.wait()` 会阻塞，直到 set() 被调用。
<Barrier> = th.Barrier(parties)         # wait() 阻塞直到累计被调用 parties 次。
```

### Queue
```python
<Queue> = qu.Queue(maxsize=0)           # First-in-first-out queue，支持 thread safety。
<Queue>.put(<obj>)                      # 该调用将阻塞，直到 queue 不再满。
<Queue>.put_nowait(<obj>)               # Queue 已满时抛出 qu.Full exception。
<obj> = <Queue>.get()                   # 该调用将阻塞，直到 queue 不再为空。
<obj> = <Queue>.get_nowait()            # Queue 为空时抛出 qu.Empty exception。
```

### Thread Executor
```python
<Exec> = cf.ThreadPoolExecutor()        # 或 use `with ThreadPoolExecutor() as <name>:`.
<iter> = <Exec>.map(<fn>, <args>, …)    # 多 thread、非 lazy 的 map()，保持结果顺序。
<Futr> = <Exec>.submit(<fn>, <arg>, …)  # 将 function 加入执行 queue，返回 Future。
<Exec>.shutdown()                       # 等待所有提交的任务完成。
```

```python
<iter> = cf.as_completed(<Futrs>)       # `next(<iter>)` 返回下一个完成的 Future。
<obj>  = <Future>.result()              # 指定 `timeout=<fl>` 且超时时抛出 TimeoutError。
<bool> = <Future>.done()                # 如果 function 已完成运行，则返回 True。
<bool> = <Future>.cancel()              # 如果 func 已经在运行，则返回 False。
```
* **map() 和 as\_completed() 也接受 'timeout' argument；next() 调用时或阻塞期间超时会抛出 _futures.TimeoutError_。map() 从最初调用计时，as_completed() 从第一次调用 next() 计时。即使所有 tasks 已完成，过晚调用 next() 仍可能使 as\_completed() 超时。**
* **Thread 内发生的 exception 会在调用 map 的 next() 或 Future 的 result() method 时抛出。Future 的 exception() method 返回捕获的 exception object 或 None。**
* **ProcessPoolExecutor 支持真正的 parallelism，但传给 workers 或从中返回的内容都必须可 [pickle](#pickle)；queues 应通过 executor 的 'initargs' 和 'initializer' parameters 传入，且应仅在 `'if __name__ == "__main__": …'` 下访问 executor。**


Asyncio
-------
* **Coroutines 与 threads 有很多共同点，但只在调用其他 coroutine 时交出控制权，且占用更少的内存。**
* **Coroutine 定义以 `'async'` keyword 开头，调用时使用 `'await'` keyword。**
* **运行 `'asyncio.run(<coroutine>)'` 启动第一个或主 coroutine。**

```python
import asyncio as ac
```

```python
<coro> = <async_function>(<args>)        # 通过调用 async func 创建 coroutine。
<obj>  = await <coroutine>               # 开始 coroutine。返回结果或None。
<task> = ac.create_task(<coroutine>)     # 调度 coroutine，需保留返回的 task 引用。
<obj>  = await <task>                    # 返回结果。还有<task>.cancel()。
```

```python
<coro> = ac.gather(<coro/task>, ...)     # 调度 coroutines，返回结果的 list。
<iter> = ac.as_completed(<coros/tasks>)  # `await next(<iter>)` 返回下一个结果。
<coro> = ac.wait(<tasks>)                # 接受 `return_when=ac.FIRST_COMPLETED`。
```

<h4 id="runsaterminalgamewhereyoucontrolanasteriskthatmustavoidnumbers">运行 terminal 游戏：控制星号躲避数字：</h4>
```python
import asyncio as ac, collections as co, curses, curses.textpad, enum, random

P = co.namedtuple('P', 'x y')            # 位置（x 和 y 坐标）。
D = enum.Enum('D', 'n e s w')            # 方向（北、东等）。
W, H = 15, 7                             # 游戏区域的宽度和高度。

def main(screen):
    curses.curs_set(0)                   # 使光标不可见。
    screen.nodelay(True)                 # 使 getch() 非阻塞。
    ac.run(main_coroutine(screen))       # 开始运行 asyncio 代码。

async def main_coroutine(scr):
    moves = ac.Queue()
    state = {'*': P(0, 0)} | dict.fromkeys(range(10), P(W//2, H//2))
    ai = [random_controller(id_, moves) for id_ in range(10)]
    mvc = [controller(scr, moves), model(moves, state), view(state, scr)]
    tasks = [ac.create_task(coro) for coro in ai + mvc]
    await ac.wait(tasks, return_when=ac.FIRST_COMPLETED)

async def random_controller(id_, moves):
    while True:
        d = random.choice(list(D))
        moves.put_nowait((id_, d))
        await ac.sleep(random.triangular(0.01, 0.65))

async def controller(scr, moves):
    while True:
        key_mappings = {258: D.s, 259: D.n, 260: D.w, 261: D.e}
        if d := key_mappings.get(scr.getch()):
            moves.put_nowait(('*', d))
        await ac.sleep(0.005)

async def model(moves, state):
    while state['*'] not in (state[id_] for id_ in range(10)):
        id_, d = await moves.get()
        dx, dy = (d == D.e) - (d == D.w), (d == D.s) - (d == D.n)
        state[id_] = P((state[id_].x + dx) % W, (state[id_].y + dy) % H)

async def view(state, scr):
    x, y = curses.COLS//2 - W//2, curses.LINES//2 - H//2
    while True:
        scr.erase()
        curses.textpad.rectangle(scr, y-1, x-1, y+H, x+W)
        for id_, p in state.items():
            dx, dy = p.x - state['*'].x + W//2, p.y - state['*'].y + H//2
            scr.addstr(y + (dy % H), x + (dx % W), str(id_))
        scr.refresh()
        await ac.sleep(0.005)

if __name__ == '__main__':
    curses.wrapper(main)
```
<br>


Libraries
=========

Progress Bar
------------
```python
# $ pip3 install tqdm
>>> import tqdm, time
>>> for el in tqdm.tqdm([1, 2, 3], desc='Processing'):
...     time.sleep(1)
Processing: 100%|████████████████████| 3/3 [00:03<00:00,  1.00s/it]
```


Plot
----
```python
# $ pip3 install matplotlib
import matplotlib.pyplot as plt

plt.plot/bar/scatter(x_data, y_data, label=None)  # 接受 plt.plot(y_data)。
plt.legend()                                      # 添加标签图例。
plt.title/xlabel/ylabel(<str>)                    # 添加标题或轴标签。
plt.show()                                        # 也可用 plt.savefig(<path>).
plt.clf()                                         # 清除绘图（图）。
```


Table
-----
<h4 id="printsacsvspreadsheettotheconsole">将 CSV spreadsheet 打印到 console：</h4>
```python
# $ pip3 install tabulate
import csv, tabulate
with open('test.csv', encoding='utf-8', newline='') as file:
    rows = list(csv.reader(file))
print(tabulate.tabulate(rows, headers='firstrow'))
```


Console App
-----------
<h4 id="runsabasicfileexplorerintheconsole">在 console 中运行简单的 file explorer：</h4>
```python
# $ pip3 install windows-curses
import curses, os
from curses import A_REVERSE, KEY_UP, KEY_DOWN, KEY_LEFT, KEY_RIGHT

def main(screen):
    ch, first, selected, paths = 0, 0, 0, os.listdir()
    while ch != ord('q'):
        height, width = screen.getmaxyx()
        screen.erase()
        for y, filename in enumerate(paths[first : first+height]):
            color = A_REVERSE if filename == paths[selected] else 0
            screen.addnstr(y, 0, filename, width-1, color)
        ch = screen.getch()
        selected -= (ch == KEY_UP) and (selected > 0)
        selected += (ch == KEY_DOWN) and (selected < len(paths)-1)
        first -= (first > selected)
        first += (first < selected-(height-1))
        if ch in [KEY_LEFT, KEY_RIGHT, ord('\n')]:
            new_dir = '..' if ch == KEY_LEFT else paths[selected]
            if os.path.isdir(new_dir):
                os.chdir(new_dir)
                first, selected, paths = 0, 0, os.listdir()

if __name__ == '__main__':
    curses.wrapper(main)
```


GUI App
-------
<h4 id="runsadesktopappforconvertingmetricweightsintopounds">运行将公制重量换算为磅的 desktop app：</h4>

```python
# $ pip3 install FreeSimpleGUI
import FreeSimpleGUI as sg

field = sg.Input(default_text='100', enable_events=True, key='QUANTITY')
menu = sg.Drop(['g', 'kg', 't'], 'kg', readonly=True, enable_events=True, k='UNIT')
text = sg.Text('is 220.462 lbs.', key='RESULT')
win = sg.Window('GUI App', [[field, menu], [text], [sg.Button('Close')]])

while True:
    event, values = win.read()
    if event in [sg.WIN_CLOSED, 'Close']:
        break
    try:
        quantity = float(values['QUANTITY'])
    except ValueError:
        continue
    unit = values['UNIT']
    lbs = quantity * {'g': 0.001, 'kg': 1, 't': 1000}[unit] / 0.45359237
    win['RESULT'].update(value=f'is {lbs:g} lbs.')
win.close()
```


Scraping
--------
<h4 id="scrapespythonsurlandlogofromitswikipediapage">从 Wikipedia 页面抓取 Python 的 URL 和 logo：</h4>
```python
# $ pip3 install requests beautifulsoup4
import requests, bs4, os

get = lambda url: requests.get(url, headers={'User-Agent': 'cpc-bot'})
response = get('https://en.wikipedia.org/wiki/Python_(programming_language)')
document = bs4.BeautifulSoup(response.text, 'html.parser')
table = document.find('table', class_='infobox vevent')
python_url = table.find('th', string='Website').next_sibling.a['href']
logo_url = table.find('img')['src']
filename = os.path.basename(logo_url)
with open(filename, 'wb') as file:
    file.write(get(f'https:{logo_url}').content)
print(f'URL: {python_url}, logo: file://{os.path.abspath(filename)}')
```

### Selenium
**用于抓取动态网站内容的 library。**
```python
# $ pip3 install selenium
from selenium import webdriver
```

```python
<Drv> = webdriver.Chrome/Firefox/Safari()      # 打开浏览器。还有`<Driver>.quit()`。
<Drv>.implicitly_wait(seconds)                 # 设置 find_element/s() methods 的 timeout。
<Drv>.get('<url>')                             # 阻塞直到浏览器触发加载事件。
<str> = <Drv>.page_source                      # 返回页面当前状态的 HTML。
<El>  = <Drv/El>.find_element('xpath', <str>)  # 接受'//<tag>[@<attr_name>="<val>"]…'。
<str> = <El>.get_attribute('<name>')           # 返回 attribute 或 property（如果存在）。
<El>.click/clear()                             # 也可用 <El>.text and <El>.send_keys(<str>).
```

<h4 id="xpathavailableinbrowsersconsoleviadxxpath">XPath：可在浏览器 console 中通过 <code>&#x27;$x(&quot;&lt;xpath&gt;&quot;)&#x27;</code> 使用：</h4>
```python
<xpath>   = //<element>[/ or // <element>]     # 例如 …/child、…//descendant、…/../sibling。
<xpath>   = //<el>/following-sibling::<el>     # 在首个 element 下查找。也可用 parent::。
<element> = <tag><conditions><index>           # Tag 接受 */a/…，用 [1/2/…] 指定 index。
<condit.> = [<sub_con> [and/or <sub_con>]]     # 使用 not(<sub_con>) 否定子条件。
<sub_con> = @<attr>[="<val>"]                  # `text()=` 和 `.=` 匹配（完整）文本。
<sub_con> = contains(@<attr>, "<val>")         # <val> 是 attribute 的 value 的子串吗？
<sub_con> = <element>                          # 是否有匹配的 child？使用 //<el> 则查找 descendant。
```


Web App
-------
**Flask 是 micro web framework，包含一个简单的 WSGI/HTTP server。如果只想在浏览器中打开 HTML 文件，使用 `'webbrowser.open(<path>)'` 即可。**
```python
# $ pip3 install flask
import flask as fl
```

```python
app = fl.Flask(__name__)                   # 返回应用程序 object。放在最上面。
app.run(host=None, port=None, debug=None)  # 或 `$ flask --app FILE run --ARG=…`.
```
* **App 在 `'http://localhost:5000'` 启动。使用 `'host="0.0.0.0"'` 允许外部访问。**
* **可搭配 [Waitress](https://flask.palletsprojects.com/en/latest/deploying/waitress/) 等 [WSGI](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface) server 和 [Nginx](https://flask.palletsprojects.com/en/latest/deploying/nginx/) 等 HTTP server，提高安全性。**
* **Debug mode 会在 script 变化时重启 app，并在浏览器中显示错误。**

### Serving Files
```python
@app.route('/img/<path:filename>')
def serve_file(filename):
    return fl.send_from_directory('DIRNAME', filename)
```

### Serving HTML
```python
@app.route('/<sport>')
def serve_html(sport):
    return fl.render_template_string('<h1>{{t}}</h1>', t=sport)
```
* **`'fl.render_template(filename, <kwargs>)'` 渲染 'templates' 目录中的文件。**
* **`'fl.abort(<int>)'` 返回 error code，`'return fl.redirect(<url>)'` 执行重定向。**
* **`'fl.request.args[<str>]'` 读取 query string（URL 中 '?' 右侧部分）中的 parameter。**
* **`'fl.session[<str>] = <obj>'` 保存 session 数据，`'fl.session.clear()'` 清空它。启动时需要通过 `'app.secret_key = <str>'` 设置 session cookie key。**

### Serving JSON
```python
@app.post('/<sport>/odds')
def serve_json(sport):
    team = fl.request.form['team']
    return {'team': team, 'odds': [2.09, 3.74, 3.68]}
```

<h4 id="startstheappinitsownthreadandqueriesitsrestapi">在独立 thread 中启动 app，并调用其 REST API：</h4>
```python
# $ pip3 install requests
>>> import threading, requests
>>> threading.Thread(target=app.run, daemon=True).start()
>>> url = 'http://localhost:5000/football/odds'
>>> resp = requests.post(url, data={'team': 'Arsenal FC'})
>>> resp.json()
{'team': 'Arsenal FC', 'odds': [2.09, 3.74, 3.68]}
```


Profiling
---------

```python
from time import perf_counter
start_time = perf_counter()
...
seconds = perf_counter() - start_time
```

### Timing a Snippet
```python
>>> from timeit import timeit
>>> timeit('list(range(10_000))', number=1000, globals=globals())
0.19373
```

### Profiling by Line
```text
$ pip3 install line_profiler
$ echo '@profile
def main():
    a = list(range(10_000))
    b = set(range(10_000))
main()' > test.py
$ kernprof -lv test.py
Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
     1                                           @profile
     2                                           def main():
     3         1        253.4    253.4     32.2      a = list(range(10_000))
     4         1        534.1    534.1     67.8      b = set(range(10_000))
```

### Visualizations
```bash
$ apt install graphviz && pip3 install gprof2dot snakeviz  # 或 install graphviz.exe.
$ tail -n +2 test.py > test.tmp && mv test.tmp test.py     # 删除第一行。
$ python3 -m cProfile -o test.prof test.py                 # 运行跟踪 profiler。
$ gprof2dot -f pstats test.prof | dot -T png -o test.png   # 生成调用图。
$ xdg-open test.png                                        # 显示调用图。
$ snakeviz test.prof                                       # 显示火焰图。
```

### Sampling Profilers
```text
+--------------+-----------+-------------------------------+-------+------+
| pip3 install |  Profiles |          How to run           | Lines | Live |
+--------------+-----------+-------------------------------+-------+------+
| pyinstrument |    CPU    | pyinstrument test.py          |  No   | No   |
| py-spy       |    CPU    | py-spy top -- python3 test.py |  No   | Yes  |
| scalene      | CPU & RAM | scalene test.py               |  Yes  | No   |
| memray       |    RAM    | memray run --live test.py     |  Yes  | Yes  |
+--------------+-----------+-------------------------------+-------+------+
```


NumPy
-----
**用于操作 arrays 的 library，运行速度可达等价 Python 代码的百倍。**

```python
# $ pip3 install numpy
import numpy as np
```

```python
<array> = np.array(<list/list_of_lists/…>)          # NumPy array。接受 `dtype=np.int64`。
<array> = np.load(<path/file>)                      # 使用 np.save(<path>, <arr>) 保存 array。
```

```python
<array> = np.zeros/ones/empty(shape)                # 传入由 ints 组成的 tuple，指定各 dimension 的大小。
<array> = np.arange(from, to_exc, ±step)            # 也可用 np.linspace(start, stop, length).
<array> = np.random.randint(from, to_exc, shape)    # 也可用 random.uniform(low, high, shape).
```

```python
<view>  = <array>.reshape(shape)                    # 也可用 `<array>.shape = (<int>, [...])`.
<array> = <array>.flatten()                         # 返回 1d 副本。还有<array>.ravel()。
```

```python
<array> = np.abs/sqrt/log/copy(<array>)             # 返回相同 shape 的新 array。
<array> = <array>.sum/max/mean/argmax(axis)         # 沿指定 index 对应的 dimension 聚合。
<array> = np.apply_along_axis(<func>, axis, <arr>)  # Function 可以返回 scalar 或 array。
```

```python
<array> = np.concat(<arrays>, axis=0)               # 沿第一个 axis（rows）连接 arrays。
<array> = np.vstack/column_stack(<arrays>)          # 1d array 被视为行/列。
<array> = np.tile/repeat(<arr>, <int/s> [, axis])   # 平铺整个 array 或重复 elements。
```
* **Shape 是由各 dimension 大小组成的 tuple。一幅 100×50 的 RGB 图像，其 shape 为 (50, 100, 3)。**
* **Axis 是 dimension 的 index，最左侧 dimension 的 index 为 0。沿 axis 2 对 RGB 图像求和，得到 shape 为 (50, 100) 的灰度图像。**

### Indexing
```perl
<object>   = <2d>[row_index, col_index]             # 或 <3d>[<int>, <int>, <int>].
<1d_view>  = <2d>[row_index]                        # 或 <3d>[<int>, <int>, <slice>].
<1d_view>  = <2d>[:, col_index]                     # 或 <3d>[<int>, <slice>, <int>].
<2d_view>  = <2d>[row_i:to_exc, col_i:to_exc]       # 或 <3d>[<int>, <slice>, <slice>].
```

```perl
<1d_array> = <2d>[row_indices, col_indices]         # 或 <3d>[<int/1d>, <1d>, <1d>].
<2d_array> = <2d>[row_indices]                      # 或 <3d>[<int/1d>, <1d>, <slice>].
<2d_array> = <2d>[:, col_indices]                   # 或 <3d>[<int/1d>, <slice>, <1d>].
<2d_array> = <2d>[np.ix_(row_is, col_is)]           # 或 <3d>[<int/1d/2d>, <2d>, <2d>].
```

```perl
<2d_bools> = <2d> > <el/1d/2d>                      # 1d object 必须是行的大小。
<1/2d_arr> = <2d>[<2d/1d_bools>]                    # 1d object 的大小必须为 col 的大小。
```
* **`':'` 返回包含该 dimension 所有 indices 的 slice；省略 dimension 时默认为 `':'`。**
* **传入两个 slices（第 4 行），与传入一个 slice 和一个 1d array（第 7 行）的效果相同。**
* **Python 将 `'obj[i, j]'` 转换为 `'obj[(i, j)]'`。因此传入含两个 indices 的 tuple 时，NumPy 无法区分 `'<2d>[row_i, col_i]'` 与 `'<2d>[row_indices]'`。**
* **`'ix_([1, 2], [3, 4])'` 返回 `'[[1], [2]]'` 和 `'[[3, 4]]'`。根据 broadcasting 规则，这等价于用 `'[[1, 1], [2, 2]]'` 和 `'[[3, 4], [3, 4]]'` 进行 indexing。**
* **可将任何能 broadcast 到目标 shape 的 value 赋给选中区域。**

### Broadcasting
**Arithmetic operations 等操作使用的 array shape 调整机制。**
```python
array_a = np.array([0.1,  0.6,  0.8])               # 即 `array_a.shape == (3,)`.
array_b = np.array([[0.1], [0.6], [0.8]])           # 即 `array_b.shape == (3, 1)`.
```

<h4 id="1ifarrayshapesdifferinlengthleftpadtheshortershapewithones">1. 如果 array shapes 的长度不同，在较短 shape 的左侧补 1：</h4>
```python
array_a = np.array([[0.1,  0.6,  0.8]])             # 即 `array_a.shape == (1, 3)`.
array_b = np.array([[0.1], [0.6], [0.8]])           # 即 `array_b.shape == (3, 1)`.
```

<h4 id="2expanddimensionswithsize1byduplicatingtheirelementsarrays">2. 对大小为 1 的 dimensions，复制其 elements/arrays 以扩展大小：</h4>
```python
array_a = np.array([[0.1,  0.6,  0.8],              # 即 `array_a.shape == (3, 3)`.
                    [0.1,  0.6,  0.8],
                    [0.1,  0.6,  0.8]])

array_b = np.array([[0.1,  0.1,  0.1],              # 即 `array_b.shape == (3, 3)`.
                    [0.6,  0.6,  0.6],
                    [0.8,  0.8,  0.8]])
```

<h3 id="example-3">示例</h3>
<h4 id="foreachpointreturnsindexofitsnearestpoint010608121">返回每个点最近邻的 index（<code>[0.1, 0.6, 0.8] =&gt; [1, 2, 1]</code>）：</h4>

```python
>>> print(points := np.array([0.1, 0.6, 0.8]))
[0.1  0.6  0.8]
>>> print(wrapped_points := points.reshape(3, 1))
[[0.1]
 [0.6]
 [0.8]]
>>> print(deltas := points - wrapped_points)
[[ 0.   0.5  0.7]
 [-0.5  0.   0.2]
 [-0.7 -0.2  0. ]]
>>> deltas[range(3), range(3)] = np.inf
>>> print(distances := np.abs(deltas))
[[inf  0.5  0.7]
 [0.5  inf  0.2]
 [0.7  0.2  inf]]
>>> print(distances.argmin(axis=1))
[1 2 1]
```


Image
-----
```python
# $ pip3 install pillow
from PIL import Image
```

```python
<Image> = Image.new('RGB', (width, heig))  # 创建图像。还有`color=<tuple_of_ints>`。
<Image> = Image.open(<path>)               # 根据文件内容识别格式。
<Image> = <Image>.convert('<mode>')        # 将图像转换为新模式（请参阅模式）。
<Image>.save(<path>)                       # 也可用 `quality=<int>` if extension is jpg/jpeg.
<Image>.show()                             # 在系统默认预览应用程序中显示图像。
```

```python
<int/tup> = <Image>.getpixel((x, y))       # 返回像素的 value，即其颜色。
<ImgCore> = <Image>.getdata()              # 返回像素 values 的平面视图。
<Image>.putpixel((x, y), <int/tuple>)      # 更新 pixel 的 value，并裁剪传入的 integers 至合法范围。
<Image>.putdata(<list/ImgCore>)            # 使用传递序列的副本更新像素。
<Image>.paste(<Image>, (x, y))             # 在指定位置绘制传递的图像。
```

```python
<Image> = <Image>.filter(<Filter>)         # 接受 ImageFilter.BLUR/SHARPEN/FIND_EDGES/…。
<Image> = <Enhance>.enhance(<float>)       # 例如 `ImageEnhance.Contrast/Color/…(<Image>)`.
```

```python
<array> = numpy.array(<Image>)             # 从图像创建 2d 或 3d NumPy array。
<Image> = Image.fromarray(<array>)         # 使用 np.uint8(<arr>.clip(0, 255)) 裁剪 values。
```

### Modes
* **`'L'` — 亮度（灰度图像）。每个 pixel 存为 0 到 255 之间的 int。**
* **`'RGB'` — 红、绿、蓝（真彩色图像）。每个 pixel 是包含三个 integers 的 tuple。**
* **`'RGBA'` — 带 alpha 的 RGB。alpha（第四个 int）越小，pixel 越透明。**
* **`'HSV'` — 色相、饱和度、明度；三个 ints 表示 HSV color space 中的颜色。**


<h3 id="examples">示例</h3>
<h4 id="createsapngimageofarainbowgradient">创建彩虹渐变的 PNG 图像：</h4>
```python
W, H = 100, 100
n_pixels = W * H
hues = (255 * i/n_pixels for i in range(n_pixels))
img = Image.new('HSV', (W, H))
img.putdata([(int(h), 255, 255) for h in hues])
img.convert('RGB').save('test.png')
```

<h4 id="addsnoisetothepngimageanddisplaysit">给 PNG 图像添加噪声并显示：</h4>
```python
from random import randint
add_noise = lambda i: max(0, min(255, i + randint(-20, 20)))
img = Image.open('test.png').convert('HSV')
img.putdata([(add_noise(h), s, v) for h, s, v in img.getdata()])
img.show()
```

### Image Draw
```python
from PIL import ImageDraw
<Draw> = ImageDraw.Draw(<Image>)           # 用于向图像添加 2D 图形的 object。
<Draw>.point((x, y))                       # 画一个点。接受 `fill=<int/tuple/str>`。
<Draw>.line((x1, y1, x2, y2 [, ...]))      # 使用 <Img>.resize((w, h)) 实现 anti-aliasing。
<Draw>.arc((x1, y1, x2, y2), deg1, deg2)   # 沿顺时针方向绘制椭圆弧。
<Draw>.rectangle((x1, y1, x2, y2))         # 也可用 rounded_rectangle() and regular_polygon().
<Draw>.polygon((x1, y1, x2, y2, ...))      # 最后一点与第一个点相连。
<Draw>.ellipse((x1, y1, x2, y2))           # 要旋转它，请使用 <Image>.rotate(anticlock_deg)。
<Draw>.text((x, y), <str>)                 # 接受 `font=ImageFont.truetype(path, size)`。
```
* **传入 `'fill=<color>'` 设置图形的填充颜色。**
* **传入 `'width=<int>'` 设置线条或轮廓宽度。**
* **传入 `'outline=<color>'` 设置轮廓颜色。**
* **Color 可以是 int、tuple、`'#rrggbb[aa]'` 或颜色名称。**


Animation
---------
<h4 id="createsagifofabouncingball">创建弹跳小球的 GIF：</h4>
```python
# $ pip3 install imageio
from PIL import Image, ImageDraw
import imageio

W, H, R = 126, 126, 10  # 宽度、高度、半径。
frames = []
for velocity in range(1, 16):
    y = sum(range(velocity))
    frame = Image.new('L', (W, H))
    draw = ImageDraw.Draw(frame)
    draw.ellipse((W/2-R, y, W/2+R, y+2*R), fill='white')
    frames.append(frame)
frames += reversed(frames[1:-1])
imageio.mimsave('test.gif', frames, duration=0.03)
```


Audio
-----
```python
import wave
```

```python
<Wave>  = wave.open('<path>')               # 打开指定的 WAV 文件进行读取。
<int>   = <Wave>.getframerate()             # 返回每秒的帧数。
<int>   = <Wave>.getnchannels()             # 返回每帧的样本数。
<int>   = <Wave>.getsampwidth()             # 返回样本中有多少个 bytes。
<tuple> = <Wave>.getparams()                # 返回包含所有 parameters 的 namedtuple。
<bytes> = <Wave>.readframes(<int>)          # 如果传递 `-1`，则返回所有帧。
```

```python
<Wave> = wave.open('<path>', 'wb')          # 创建/截断用于写入的文件。
<Wave>.setframerate(<int>)                  # 传入 44100，video track 通常用 48000。
<Wave>.setnchannels(<int>)                  # Mono 信号传入 1，stereo 信号传入 2。
<Wave>.setsampwidth(<int>)                  # CD 音质传入 2，hi-res 音质传入 3。
<Wave>.setparams(<tuple>)                   # 传递的 tuple 必须包含所有参数。
<Wave>.writeframes(<bytes>)                 # 将传递的帧附加到音频文件。
```
* **Bytes object 包含一串 frames，每个 frame 由一个或多个 samples 组成。**
* **Stereo 信号中，每个 frame 的第一个 sample 属于左声道，第二个属于右声道。**
* **每个 sample 由一个或多个 bytes 组成，取决于 sample width。将它们转换为 integer 后，可表示扬声器振膜在该时刻的位移。**
* **Sample width 为一个 byte 时使用 unsigned encoding；其他大小使用 signed、little-endian byte order，即 least significant byte 在前。**

### Sample Values
```text
+-----------+-----------+------+-----------+
| sampwidth |    min    | zero |    max    |
+-----------+-----------+------+-----------+
|     1     |         0 |  128 |       255 |
|     2     |    -32768 |    0 |     32767 |
|     3     |  -8388608 |    0 |   8388607 |
+-----------+-----------+------+-----------+
```

### Read Float Samples from WAV File
```python
def read_wav_file(filename):
    def get_int(bytes_obj):
        an_int = int.from_bytes(bytes_obj, 'little', signed=(p.sampwidth != 1))
        return an_int - (128 * (p.sampwidth == 1))
    with wave.open(filename) as file:
        p = file.getparams()
        frames = file.readframes(-1)
    samples_b = (frames[i : i + p.sampwidth] for i in range(0, len(frames), p.sampwidth))
    return [get_int(b) / pow(2, (p.sampwidth * 8) - 1) for b in samples_b], p
```

### Write Float Samples to WAV File
```python
def write_to_wav_file(filename, samples_f, p=None, nchannels=1, sampwidth=2, fs=44100):
    def get_bytes(a_float):
        a_float = max(-1, min(1 - 2e-16, a_float)) + (p.sampwidth == 1)
        a_float *= pow(2, (p.sampwidth * 8) - 1)
        return int(a_float).to_bytes(p.sampwidth, 'little', signed=(p.sampwidth != 1))
    if p is None:
        p = wave._wave_params(nchannels, sampwidth, fs, 0, 'NONE', 'not compressed')
    with wave.open(filename, 'wb') as file:
        file.setparams(p)
        file.writeframes(b''.join(get_bytes(f) for f in samples_f))
```

<h3 id="examples-1">示例</h3>
<h4 id="savesa440hzsinewavetoamonowavfile">将 440 Hz sine wave 保存到 mono WAV 文件：</h4>
```python
from math import sin, pi
get_sin = lambda i: sin(440 * pi*2 * i/44100) * 0.2
write_to_wav_file('test.wav', (get_sin(i) for i in range(100_000)))
```

<h4 id="addsnoisetothewavfile">给 WAV 文件添加噪声：</h4>
```python
from random import uniform
samples_f, prms = read_wav_file('test.wav')
samples_f = (f + uniform(-0.02, 0.02) for f in samples_f)
write_to_wav_file('test.wav', samples_f, p=prms)
```

### Audio Player
```python
# $ pip3 install nava
from nava import play
play('test.wav')
```

### Text to Speech
```python
# $ pip3 install piper-tts sounddevice
import os, piper, sounddevice
os.system('python3 -m piper.download_voices en_US-lessac-high')
voice = piper.PiperVoice.load('en_US-lessac-high.onnx')
for sentence in voice.synthesize('Sally sells seashells by the seashore.'):
    sounddevice.wait()
    sounddevice.play(sentence.audio_float_array, sentence.sample_rate)
sounddevice.wait()
```


Synthesizer
-----------
<h4 id="playspopcornbygershonkingsley">播放 Gershon Kingsley 的 Popcorn：</h4>

```python
# $ pip3 install numpy sounddevice
import itertools as it, math, numpy as np, sounddevice

def play_notes(notes, bpm=132, fs=44100, volume=0.1):
    beat_len  = 60/bpm * fs
    get_pause = lambda beats: it.repeat(0, int(beats * beat_len))
    get_sinus = lambda hz, i: math.sin(hz * math.pi*2 * i/fs) * volume
    get_wave  = lambda hz, beats: (get_sinus(hz, i) for i in range(int(beats * beat_len)))
    get_hertz = lambda note: 440 * 2 ** ((int(note[:2]) - 69) / 12)
    get_beats = lambda note: 1/2 if '♩' in note else 1/4 if '♪' in note else 1
    get_samps = lambda n: get_wave(get_hertz(n), get_beats(n)) if n else get_pause(1/4)
    samples_f = it.chain(get_pause(1/2), *(get_samps(n) for n in notes.split(',')))
    sounddevice.play(np.fromiter(samples_f, np.float32), fs, blocking=True)

play_notes('83♩,81♪,,83♪,,78♪,,74♪,,78♪,,71♪,,,,83♪,,81♪,,83♪,,78♪,,74♪,,78♪,,71♪,,,,'
           '83♩,85♪,,86♪,,85♪,,86♪,,83♪,,85♩,83♪,,85♪,,81♪,,83♪,,81♪,,83♪,,79♪,,83♪,,,,')
```


Pygame
------
<h4 id="opensawindowanddrawsasquarethatcanbemovedwitharrowkeys">打开窗口并绘制可用方向键移动的方块：</h4>
```python
# $ pip3 install pygame
import pygame as pg

pg.init()
window = pg.display.set_mode((500, 500))
rect = pg.Rect(240, 240, 20, 20)
while not pg.event.get(pg.QUIT):
    for evt in pg.event.get(pg.KEYDOWN):
        dx = (evt.key == pg.K_RIGHT) - (evt.key == pg.K_LEFT)
        dy = (evt.key == pg.K_DOWN) - (evt.key == pg.K_UP)
        rect = rect.move((dx * 20, dy * 20))
    window.fill(pg.Color('black'))
    pg.draw.rect(window, pg.Color('white'), rect)
    pg.display.flip()
pg.quit()
```

### Rect
**保存左上角位置、宽度和高度。**
```python
<Rect> = pg.Rect(x, y, width, height)        # 创建 Rect object，将传入的 floats 向零截断。
<int>  = <Rect>.x/y/centerx/centery          # 也可用 `top`, `right`, etc. Allows assignments.
<tup.> = <Rect>.topleft/center               # 也可用 `topright/bottomright/bottomleft/size`.
<Rect> = <Rect>.move((dx, dy))               # 使用 move_ip() 原地移动 rectangle。
```

```python
<bool> = <Rect>.collidepoint((x, y))         # 如果矩形包含该点，则返回 True。
<bool> = <Rect>.colliderect(<Rect>)          # 如果矩形发生碰撞，则返回 True。
<int>  = <Rect>.collidelist(<Rects>)         # 返回首个碰撞 Rect 的 index，或 -1。
<list> = <Rect>.collidelistall(<Rects>)      # 返回所有碰撞矩形的 indices。
```

### Surface
**保存图像或主窗口的 surface。**

```python
<Surf> = pg.Surface((w, h))                  # 创建 RGB surface；`flags=pg.SRCALPHA` 时为 RGBA。
<Surf> = pg.display.set_mode((w, h))         # 打开新窗口，返回 surface object。
<Surf> = pg.image.load(<path/file>)          # 加载图像。还有 get_width/get_height()。
<Surf> = <Surf>.subsurface(<Rect>)           # 从裁剪区域创建新的 surface object。
<view> = <Surf>.get_view()                   # 使用 <view>.write(<array>) 写入图像。
```

```python
<Surf>.fill(color)                           # 传入 ints 的 tuple 或 pg.Color('<name/hex>')。
<Surf>.set_at((x, y), color)                 # 更新一个像素。还有 <Surf>.get_at((x, y))。
<Surf>.blit(<Surf>, (x, y))                  # 在指定位置绘制传入的 surface。
```

```python
<Surf> = tr.scale(<Surf>, (w, h))            # 使用 `import pygame.transform as tr` 导入。
<Surf> = tr.rotate(<Surf>, degrees)          # 将 surface 逆时针旋转指定角度。
<Surf> = tr.flip(<Surf>, flip_x=True)        # y 轴上的镜像。还有`flip_y=True`。
```

```python
line(<Surf>, color, (x1, y1), (x2, y2))      # 也可用 aaline。先运行 `from pygame.draw import *`。
arc(<Surf>, color, <Rect>, rad1, rad2)       # 逆时针绘制椭圆弧。
rect(<Surf>, color, <Rect>, width=0)         # 也可用 polygon(<Surf>, color, points, width=0).
circle(<Surf>, color, (x, y), radius)        # 也可用 ellipse(<Surf>, color, <Rect>, width=0).
```

```python
<Font> = pg.font.Font(<path/file>, size)     # 加载 TTF 文件。通过 None 作为默认字体。
<Surf> = <Font>.render(<str>, True, color)   # 通过第四个 argument 接受背景颜色。
```

### Sound
```python
<Sound> = pg.mixer.Sound(<path/file>)        # 接受 WAV 文件或由 short integers 组成的 array。
<Sound>.play/stop()                          # 接受 `loops=-1`。还有set_volume(<float>)。
```

<h3 id="basicmariobrothersexample">Mario Brothers 基础示例</h3>
```python
import pygame as pg, dataclasses as dc, enum, io, itertools, random as r, urllib.request

W, H, D = 50, 50, enum.Enum('D', 'n e s w')  # 宽度、高度、方向。

def main():
    def get_window():
        pg.init()
        return pg.display.set_mode((W*16, H*16))
    def get_images():
        url = 'https://gto76.github.io/python-cheatsheet/web/mario_bros.png'
        img = pg.image.load(io.BytesIO(urllib.request.urlopen(url).read()))
        return [img.subsurface(get_rect(x, 0)) for x in range(20)]
    def get_mario():
        Mario = dc.make_dataclass('Mario', ['rect', 'vx', 'vy', 'dir', 'img_i'])
        return Mario(get_rect(1, 1), 0, 0, D.e, itertools.cycle(range(3)))
    def get_tiles():
        is_border = lambda x, y: x in [0, W-1] or y in [0, H-1]
        borders = [(x, y) for x in range(W) for y in range(H) if is_border(x, y)]
        platforms = [(r.randint(1, W-2), r.randint(2, H-2)) for _ in range(200)]
        return [get_rect(x, y) for x, y in borders + platforms]
    def get_rect(x, y):
        return pg.Rect(x*16, y*16, 16, 16)
    run(get_window(), get_images(), get_mario(), get_tiles())

def run(window, images, mario, tiles):
    clock = pg.time.Clock()
    pressed = set()
    while not pg.event.get(pg.QUIT):
        clock.tick(28)
        pressed |= {e.key for e in pg.event.get(pg.KEYDOWN)}
        pressed -= {e.key for e in pg.event.get(pg.KEYUP)}
        update_velocity(mario, tiles, pressed)
        update_position(mario, tiles)
        draw(window, images, mario, tiles)
    pg.quit()

def update_velocity(mario, tiles, pressed):
    mario.vx += 2 * ((pg.K_RIGHT in pressed) - (pg.K_LEFT in pressed))
    mario.vx += (mario.vx < 0) - (mario.vx > 0)
    mario.vx = max(-4, min(4, mario.vx))
    mario.vy += 1 if is_airborne(mario, tiles) else (pg.K_UP in pressed) * -10

def update_position(mario, tiles):
    x, y = mario.rect.topleft
    steps = max(abs(mario.vx), abs(mario.vy))
    for _ in range(steps):
        bounds = get_boundaries(mario.rect, tiles)
        mario.vx, mario.vy = stop_on_collision(mario.vx, mario.vy, bounds)
        mario.rect.topleft = x, y = x + (mario.vx/steps), y + (mario.vy/steps)

def is_airborne(mario, tiles):
    return D.s not in get_boundaries(mario.rect, tiles)

def get_boundaries(rect, tiles):
    deltas = {D.n: (0, -1), D.e: (1, 0), D.s: (0, 1), D.w: (-1, 0)}
    return {d for d in D if rect.move(deltas[d]).collidelist(tiles) != -1}

def stop_on_collision(vx, vy, bounds):
    return (0 if (D.w in bounds and vx < 0) or (D.e in bounds and vx > 0) else vx,
            0 if (D.n in bounds and vy < 0) or (D.s in bounds and vy > 0) else vy)

def draw(window, images, mario, tiles):
    window.fill((85, 168, 255))
    mario.dir = mario.dir if mario.vx == 0 else D.w if mario.vx < 0 else D.e
    img_i = 4 if is_airborne(mario, tiles) else next(mario.img_i) if mario.vx else 6
    window.blit(images[img_i + ((mario.dir == D.w) * 9)], mario.rect)
    for tile in tiles:
        is_border = tile.x in [0, (W-1)*16] or tile.y in [0, (H-1)*16]
        window.blit(images[18 if is_border else 19], tile)
    pg.display.flip()

if __name__ == '__main__':
    main()
```


Pandas
------
**用于数据分析的 library，示例见 [Plotly](#plotly)。**

```python
# $ pip3 install pandas matplotlib
import pandas as pd, matplotlib.pyplot as plt
```

### Series
**带有名称的有序 dictionary。**

```python
>>> s = pd.Series([1, 2], index=['x', 'y'], name='a'); s
x    1
y    2
Name: a, dtype: int64
```

```python
<S>  = pd.Series(<list>)                       # 返回 Series，使用 indices 作为 'index'。
<S>  = pd.Series(<dict>)                       # 返回 Series，使用 keys 作为 'index'。
```

```python
<el> = <S>.loc[key]                            # 或：<S>.iloc[i]
<S>  = <S>.loc[coll_of_keys]                   # 或：<S>.iloc[coll_of_i]
<S>  = <S>.loc[from_key : to_key_inc]          # 或：<S>.iloc[from_i : to_i_exc]
```

```python
<el> = <S>[key/i]                              # 或：<S>.<key>
<S>  = <S>[coll_of_keys/coll_of_i]             # 或：<S>[key/i : key/i]
<S>  = <S>[<S_of_bools>]                       # 或：<S>.loc/iloc[<S_of_bools>]
```

```python
<S>  = <S> > <el/S>                            # 返回 bools 的 S。对于逻辑，请使用 &、|、~。
<S>  = <S> + <el/S>                            # Keys 不匹配的 items 取 value NaN。
```

```python
<S>  = <S>.head/describe/sort_values()         # 也可用 <S>.unique/value_counts/round/dropna()。
<S>  = <S>.str.strip/lower/contains/replace()  # 也可用 split().str[i] and split(expand=True).
<S>  = <S>.dt.year/month/day/hour              # 使用 pd.to_datetime(<S>) 获得包含 datetimes 的 Series。
<S>  = <S>.dt.to_period('y/m/d/h')             # 将 datetimes 量化为包含 Period objects 的 Series。
```

```python
<S>.plot.line/area/bar/pie/hist()              # 生成图表，接受 `title=<str>` argument。
plt.show()                                     # 显示图表。也可用 plt.savefig(<path>)。
```
* **使用 `'print(<S>.to_string())'` 打印超过 60 个 items 的 Series。**
* **使用 `'<S>.index'` 获取 keys 的 collection，用 `'<S>.index = <coll>'` 更新。**
* **向 loc/iloc 只传入 list 或 Series，因为 `'obj[x, y]'` 会转换为 `'obj[(x, y)]'`；`'<S>.loc[key_1, key_2]'` 用于从 multi-indexed Series 中读取 value。**
* **Pandas 使用 `'np.int64'` 等 NumPy types。若给任意 item 赋 np.nan，Series 会转换为 `'float64'`。使用 `'<S>.astype(<str/type>)'` 转换 Series。**

<h4 id="seriesaggregatetransformmap">Series — Aggregate、Transform、Map：</h4>
```python
<el> = <S>.sum/max/mean/std/idxmax/count()     # 或：<S>.agg(lambda <S>: <el>)
<S>  = <S>.rank/diff/cumsum/ffill/interpol…()  # 或：<S>.agg/transform(lambda <S>: <S>)
<S>  = <S>.isna/fillna/isin([<el/coll>])       # 或：<S>.agg/transform/map(lambda <el>: <el>)
```

```text
+--------------+-------------+-------------+---------------+
|              |    'sum'    |   ['sum']   | {'s': 'sum'}  |
+--------------+-------------+-------------+---------------+
| s.apply(…)   |      3      |    sum  3   |     s  3      |
| s.agg(…)     |             |             |               |
+--------------+-------------+-------------+---------------+
```

```text
+--------------+-------------+-------------+---------------+
|              |    'rank'   |   ['rank']  | {'r': 'rank'} |
+--------------+-------------+-------------+---------------+
| s.apply(…)   |             |      rank   |               |
| s.agg(…)     |    x  1.0   |   x   1.0   |   r  x  1.0   |
|              |    y  2.0   |   y   2.0   |      y  2.0   |
+--------------+-------------+-------------+---------------+
```

### DataFrame
**带行、列 labels 的 table。**

```python
>>> df = pd.DataFrame([[1, 2], [3, 4]], index=['a', 'b'], columns=['x', 'y']); df
   x  y
a  1  2
b  3  4
```

```python
<DF>   = pd.DataFrame(<list_of_rows>)          # 行可以是 lists、dicts 或 series。
<DF>   = pd.DataFrame(<dict_of_columns>)       # 列可以是 lists、dicts 或 series。
```

```python
<el>   = <DF>.loc[row_key, col_key]            # 或：<DF>.iloc[row_i, col_i]
<S/DF> = <DF>.loc[row_key/s]                   # 或：<DF>.iloc[row_i/s]
<S/DF> = <DF>.loc[:, col_key/s]                # 或：<DF>.iloc[:, col_i/s]
<DF>   = <DF>.loc[row_bools, col_bools]        # 或：<DF>.iloc[row_bools, col_bools]
```

```python
<S/DF> = <DF>[col_key/s]                       # 或：<DF>.<col_key>
<DF>   = <DF>[<S_of_bools>]                    # 过滤行。例如 `df[df.x > 1]`。
<DF>   = <DF>[<DF_of_bools>]                   # 将 bools 中为 False 的 items 赋为 NaN。
```

```python
<DF>   = <DF> > <el/S/DF>                      # 返回 bools 的 DF。将 series 视为一行。
<DF>   = <DF> + <el/S/DF>                      # Keys 不匹配的 items 取 value NaN。
```

```python
<DF>   = <DF>.set_index(col_key)               # 将行 keys 替换为列的 values。
<DF>   = <DF>.reset_index(drop=False)          # 将 keys 行删除或移动到名为 index 的列。
<DF>   = <DF>.sort_index(ascending=True)       # 按行 keys 对行进行排序。使用 `axis=1` 作为列。
<DF>   = <DF>.sort_values(col_key/s)           # 按传递的列对行进行排序。还有`axis=1`。
```

```python
<DF>   = <DF>.head/tail/sample(<int>)          # 返回第一行、最后一行或随机 n 行。
<DF>   = <DF>.describe()                       # 描述列。还有info()、corr()、shape。
<DF>   = <DF>.query('<query>')                 # 过滤行。例如 `df.query('x > 1')`。
```

```python
<DF>.plot.line/area/bar/scatter(x=col_key, …)  # `y=col_key/s`。也是 hist/box(column/by=col_k)。
plt.show()                                     # 显示图表。也可用 plt.savefig(<path>)。
```

<h4 id="dataframemergejoinconcat">DataFrame — Merge、Join、Concat：</h4>
```python
>>> df_2 = pd.DataFrame([[4, 5], [6, 7]], index=['b', 'c'], columns=['y', 'z']); df_2
   y  z
b  4  5
c  6  7
```

```text
+-----------------------+---------------+------------+------------+---------------------------+
|                       |    'outer'    |   'inner'  |   'left'   |       Description         |
+-----------------------+---------------+------------+------------+---------------------------+
| df.merge(df_2,        |    x   y   z  | x   y   z  | x   y   z  | Merges on column if 'on'  |
|          on='y',      | 0  1   2   .  | 3   4   5  | 1   2   .  | or 'left_on/right_on' are |
|          how=…)       | 1  3   4   5  |            | 3   4   5  | set, else on shared cols. |
|                       | 2  .   6   7  |            |            | Uses 'inner' by default.  |
+-----------------------+---------------+------------+------------+---------------------------+
| df.join(df_2,         |    x yl yr  z |            | x yl yr  z | Merges on row keys.       |
|         lsuffix='l',  | a  1  2  .  . | x yl yr  z | 1  2  .  . | Uses 'left' by default.   |
|         rsuffix='r',  | b  3  4  4  5 | 3  4  4  5 | 3  4  4  5 | If Series is passed, it   |
|         how=…)        | c  .  .  6  7 |            |            | is treated as a column.   |
+-----------------------+---------------+------------+------------+---------------------------+
| pd.concat([df, df_2], |    x   y   z  |     y      |            | Adds rows at the bottom.  |
|           axis=0,     | a  1   2   .  |     2      |            | Uses 'outer' by default.  |
|           join=…)     | b  3   4   .  |     4      |            | A Series is treated as a  |
|                       | b  .   4   5  |     4      |            | column. To add a row use  |
|                       | c  .   6   7  |     6      |            | pd.concat([df, DF([s])]). |
+-----------------------+---------------+------------+------------+---------------------------+
| pd.concat([df, df_2], |    x  y  y  z |            |            | Adds columns at the       |
|           axis=1,     | a  1  2  .  . | x  y  y  z |            | right end. Uses 'outer'   |
|           join=…)     | b  3  4  4  5 | 3  4  4  5 |            | by default. A Series is   |
|                       | c  .  .  6  7 |            |            | treated as a column.      |
+-----------------------+---------------+------------+------------+---------------------------+
```

<h4 id="dataframeaggregatetransformmap">DataFrame — Aggregate、Transform、Map：</h4>
```python
<S>  = <DF>.sum/max/mean/std/idxmax/count()    # 或：<DF>.apply/agg(lambda <S>: <el>)
<DF> = <DF>.rank/diff/cumsum/ffill/interpo…()  # 或：<DF>.apply/agg/transform(lambda <S>: <S>)
<DF> = <DF>.isna/fillna/isin([<el/coll>])      # 或：<DF>.applymap(lambda <el>: <el>)
```

```text
+-----------------+---------------+---------------+---------------+
|                 |     'sum'     |    ['sum']    | {'x': 'sum'}  |
+-----------------+---------------+---------------+---------------+
| df.apply(…)     |      x  4     |        x  y   |     x  4      |
| df.agg(…)       |      y  6     |   sum  4  6   |               |
+-----------------+---------------+---------------+---------------+
```

```text
+-----------------+---------------+---------------+---------------+
|                 |     'rank'    |    ['rank']   | {'x': 'rank'} |
+-----------------+---------------+---------------+---------------+
| df.apply(…)     |               |       x    y  |               |
| df.agg(…)       |       x    y  |    rank rank  |         x     |
| df.transform(…) |  a  1.0  1.0  |  a  1.0  1.0  |    a  1.0     |
|                 |  b  2.0  2.0  |  b  2.0  2.0  |    b  2.0     |
+-----------------+---------------+---------------+---------------+
```
* **这些 methods 默认处理 columns，传入 `'axis=1'` 则处理 rows；`'<DF>.dropna()'`、`'<DF>.drop(row_key/s)'` 和 `'<DF>.rename(<dict/func>)'` 除外。**
* **第五个结果的 columns 使用 multi-index。因此需要用 column keys 的 tuple 指定一列：`'<DF>.loc[row_key, (col_key_1, col_key_2)]'`。**

### Multi-Index
```python
<DF> = <DF>.loc[row_key_1]                     # 也可用 <DF>.loc[(slice(None), row_key_2), :].
<DF> = <DF>.loc[:, col_key_1]                  # 等价于 <DF>.xs(col_key_1, axis=1, level=0).
<DF> = <DF>.set_index(col_key/s)               # 将列移动到 index。还有`append=True`。
<DF> = <DF>.pivot_table(index=col_key/s)       # `columns=key/s, values=k/s, aggfunc='mean'`。
<S>  = <DF>.stack/unstack(level=-1)            # 将 column keys 与 index 组合，或执行反向操作。
```

### File Formats
```python
<S/DF> = pd.read_json/pickle(<path/url/file>)  # 也可用 io.StringIO(<str>), io.BytesIO(<bytes>).
<DF>   = pd.read_csv/excel(<path/url/file>)    # 也可用 `header/index_col/dtype/usecols/…=<obj>`.
<list> = pd.read_html(<path/url/file>)         # 如果网页有零个表，则抛出 ImportError。
<S/DF> = pd.read_parquet/feather/hdf(<path…>)  # Function read_hdf() 接受 `key=<s/df_name>`。
<DF>   = pd.read_sql('<table/query>', <conn>)  # 传入 SQLite3/SQLAlchemy connection，见 #SQLite。
```

```python
<DF>.to_json/csv/html/latex/parquet(<path>)    # 如果省略路径，则返回 string/bytes。
<DF>.to_pickle/excel/feather/hdf(<path>)       # Method to_hdf() 需要 `key=<s/df_name>`。
<DF>.to_sql('<table_name>', <connection>)      # 也可用 `if_exists='fail/replace/append'`.
```
* **运行 `'$ pip3 install "pandas[excel]" odfpy lxml pyarrow'` 安装依赖。**
* **CSV functions 使用与 standard library 的 csv module 相同的 dialect，例如 `'sep=","'`。**
* **read\_csv() 只解析 'parse\_dates' 中列出的 columns 的日期。它会自动检测 format，也可通过 'date\_format' 或 'dayfirst' arguments 辅助指定。**
* **若 'parse_dates' argument 包含 'index\_col'，将得到带 DatetimeIndex 的 DataFrame。其 `'resample("y/m/d/h")'` method 返回类似 GroupBy 的 Resampler object。**

### GroupBy
**按照指定 column 的 value 对 DataFrame rows 分组的 object。**

```python
<GB> = <DF>.groupby(col_key/s)                 # 根据传递的列将 DF 分成几组。
<DF> = <GB>.apply/filter(<func>)               # 如果 func 返回 False，过滤器将删除一个组。
<DF> = <GB>.get_group(<el>)                    # 通过分组列的 value 选择一个组。
<S>  = <GB>.size()                             # 包含各组大小的 Series，keys 与 get_group() 相同。
<GB> = <GB>[col_key]                           # 单 column 的 GroupBy，所有操作返回 Series。
```

```python
<DF> = <GB>.sum/max/mean/std/idxmax/count()    # 或：<GB>.agg(lambda <S>: <el>)
<DF> = <GB>.rank/diff/cumsum/ffill()           # 或：<GB>.transform(lambda <S>: <S>)
<DF> = <GB>.fillna(<el>)                       # 或：<GB>.transform(lambda <S>: <S>)
```

<h4 id="dividesrowsintogroupsandsumstheircolumnsresulthasanamedindexthatcreatescolumnzonreset_index">将 rows 分组并对各 columns 求和。结果带有具名 index，reset_index() 会将它转为 <code>&#x27;z&#x27;</code> column：</h4>
```python
>>> df = pd.DataFrame([[1, 2, 3], [4, 5, 6], [7, 8, 6]], list('abc'), list('xyz'))
>>> gb = df.groupby('z'); gb.apply(print)
   x  y  z
a  1  2  3
   x  y  z
b  4  5  6
c  7  8  6
>>> gb.sum()
    x   y
z
3   1   2
6  11  13
```

### Rolling
**用于 rolling window 计算的 object。**

```python
<RS/RDF/RGB> = <S/DF/GB>.rolling(win_size)     # 也可用 `min_periods=None, center=False`.
<RS/RDF/RGB> = <RDF/RGB>[col_key/s]            # 也可用 <RDF/RGB>.<col_key> if key is str.
<S/DF>       = <R>.mean/sum/max()              # 或：<R>.apply/agg(lambda <S>: <el>)
```


Plotly
------
```python
# $ pip3 install plotly kaleido pandas
import plotly.express as px, pandas as pd
```

```python
<Fig> = px.line(<DF> [, y=col_key/s [, x=col_key]])   # 也可用 px.line(y=<list> [, x=<list>]).
<Fig>.update_layout(paper_bgcolor='#rrggbb')          # 也可用 `margin=dict(t=0, r=0, b=0, l=0)`.
<Fig>.write_html/json/image('<path>')                 # 使用 <Fig>.show() 显示绘图。
```

```python
<Fig> = px.area/bar/box(<DF>, x=col_key, y=col_keys)  # 也可用 `color=col_key`. All are optional.
<Fig> = px.scatter(<DF>, x=col_key, y=col_keys)       # 也可用 `color/size/symbol=col_key`. Same.
<Fig> = px.scatter_3d(<DF>, x=col_key, y=col_key, …)  # `z=col_key`。也接受 color、size、symbol。
<Fig> = px.histogram(<DF>, x=col_keys, y=col_key)     # 也接受 color、nbins，均为可选。
```

<h4 id="displaysalinechartoftotalcovid19deathspermilliongroupedbycontinent">显示按大洲分组的每百万人 COVID-19 累计死亡人数折线图：</h4>

![Covid Deaths](web/covid_deaths.png)
<div id="2a950764-39fc-416d-97fe-0a6226a3095f" class="plotly-graph-div" style="height:312px; width:914px;"></div>

```python
covid = pd.read_csv('https://raw.githubusercontent.com/owid/covid-19-data/8dde8ca49b'
                    '6e648c17dd420b2726ca0779402651/public/data/owid-covid-data.csv',
                    usecols=['iso_code', 'date', 'population', 'total_deaths'])
continents = pd.read_csv('https://gto76.github.io/python-cheatsheet/web/continents.csv',
                         usecols=['Three_Letter_Country_Code', 'Continent_Name'])
df = pd.merge(covid, continents, left_on='iso_code', right_on='Three_Letter_Country_Code')
df = df.groupby(['Continent_Name', 'date']).sum().reset_index()
df['Total Deaths per Million'] = df.total_deaths * 1e6 / df.population
df = df[df.date > '2020-03-14']
df = df.rename({'date': 'Date', 'Continent_Name': 'Continent'}, axis='columns')
px.line(df, x='Date', y='Total Deaths per Million', color='Continent')
```

<h4 id="displaysamultiaxislinechartoftotalcovid19casesandchangesinpricesofbitcoindowjonesandgold">显示 COVID-19 累计病例数及 Bitcoin、Dow Jones、黄金价格变化的多轴折线图：</h4>

![Covid Cases](web/covid_cases.png)
<div id="e23ccacc-a456-478b-b467-7282a2165921" class="plotly-graph-div" style="height:285px; width:935px;"></div>

```python
# $ pip3 install pandas lxml selenium plotly
import pandas as pd, selenium.webdriver, io, plotly.graph_objects as go

def main():
    covid, (bitcoin, gold, dow) = get_covid_cases(), get_tickers()
    df = wrangle_data(covid, bitcoin, gold, dow)
    display_data(df)

def get_covid_cases():
    url = 'https://catalog.ourworldindata.org/garden/covid/latest/compact/compact.csv'
    df = pd.read_csv(url, parse_dates=['date'])
    df = df[df.country == 'World']
    s = df.set_index('date').total_cases
    return s.rename('Total Cases')

def get_tickers():
    with selenium.webdriver.Chrome() as driver:
        driver.implicitly_wait(10)
        symbols = {'Bitcoin': 'BTC-USD', 'Gold': 'GC=F', 'Dow Jones': '%5EDJI'}
        return [get_ticker(driver, name, symbol) for name, symbol in symbols.items()]

def get_ticker(driver, name, symbol):
    url = f'https://finance.yahoo.com/quote/{symbol}/history/'
    driver.get(url + '?period1=1579651200&period2=9999999999')
    if buttons := driver.find_elements('xpath', '//button[@name="reject"]'):
        buttons[0].click()
    html = io.StringIO(driver.page_source)
    dataframes = pd.read_html(html, parse_dates=['Date'])
    s = dataframes[0].set_index('Date').Open
    return s.rename(name)

def wrangle_data(covid, bitcoin, gold, dow):
    df = pd.concat([bitcoin, gold, dow], axis=1)  # 通过连接日期列来创建 DF。
    df = df.sort_index().interpolate()            # 按日期排序 rows，并对 NaN 进行 interpolation。
    df = df.loc['2020-02-23':'2021-12-20']        # 保留指定日期之间的行。
    df = (df / df.iloc[0]) * 100                  # 将所有单元除以第一天的 value。
    df = df.join(covid)                           # 添加包含 covid 病例的列。
    return df.sort_values(df.index[-1], axis=1)   # 按最后一天的 value 对列进行排序。

def display_data(df):
    figure = go.Figure()
    for col_name in reversed(df.columns):
        yaxis = 'y1' if col_name == 'Total Cases' else 'y2'
        trace = go.Scatter(x=df.index, y=df[col_name], yaxis=yaxis, name=col_name)
        figure.add_trace(trace)
    figure.update_layout(
        width=944,
        height=423,
        yaxis1=dict(title='Total Cases', rangemode='tozero'),
        yaxis2=dict(title='%', rangemode='tozero', overlaying='y', side='right'),
        colorway=['#EF553B', '#636EFA', '#00CC96', '#FFA152'],
        legend=dict(x=1.08)
    )
    figure.show()

if __name__ == '__main__':
    main()
```


<h2 id="appendix">附录</h2>
### Cython
**将类似 Python 的代码编译为 C 的 library。**

```python
# $ pip3 install cython
import pyximport; pyximport.install()                # Module 运行 Cython 脚本。
import <cython_script>                               # Script 的扩展名必须为 '.pyx'。
```

<h4 id="allcdefdefinitionsareoptionalbuttheycontributetothespeedup">所有 <code>&#x27;cdef&#x27;</code> 定义都是可选的，但有助于提高速度：</h4>
```python
cdef <type> <var_name> [= <obj/var>]                 # Python 或 C type variable。
cdef <ctype> *<pointer_name> [= &<var>]              # 使用<pointer>[0]获取value。
cdef <ctype>[size] <array_name> [= <coll/array>]     # 也可用 `<ctype>[:] <mview> = <array>`.
cdef <ctype> *<array_name> [= <coll/array/pointer>]  # 例如 `<<ctype> *> malloc(n_bytes)`.
```

```python
cdef <type> <func_name>(<type> [*]<arg_name>): ...   # 省略types 默认为`object`。
```

```python
cdef class <class_name>:                             # 也可用 `cdef struct <struct_name>:`.
    cdef public <type> [*]<attr_name>                # 也可用 `... <ctype> [*]<field_name>`.
    def __init__(self, <type> <arg_name>):           # 也可用 `cdef __dealloc__(self):`.
        self.<attr_name> = <arg_name>                # 也可用 `... free(<array/pointer>)`.
```

### Virtual Environments
**将 libraries 直接安装到项目目录的机制。**

```perl
$ python3 -m venv NAME         # 在当前目录中创建 virtual environment。
$ source NAME/bin/activate     # 激活它。在 Windows 上运行 `NAME\Scripts\activate`。
$ pip3 install LIBRARY         # 将 library 安装到活动 virtual environment 中。
$ python3 FILE                 # 在活动环境中运行脚本。还有`./FILE`。
$ deactivate                   # 停用当前活动的 virtual environment。
```

### Basic Script Template
**使用 `'$ python3 FILE'` 或 `'$ chmod u+x FILE; ./FILE'` 运行 script。若要在未捕获 exception 时自动启动 debugger，运行 `'$ python3 -m pdb -cc FILE'`。**
```python
#!/usr/bin/env python3
#
# 用法：.py
#

from sys import argv, exit
from collections import defaultdict, namedtuple
from dataclasses import make_dataclass
from enum import Enum
import functools as ft, itertools as it, operator as op, re


def main():
    pass


###
##UTIL
#

def read_file(filename):
    with open(filename, encoding='utf-8') as file:
        return file.readlines()


if __name__ == '__main__':
    main()
```


Index
-----
* **Ctrl+F / ⌘F 通常已足够。**
* **在[网页](https://alex-shan.github.io/python-cheatsheet/)上搜索 `'#<title>'`，可以将搜索范围限制为标题。**
* **点击标题旁的 `'#'`，即可获取对应章节的链接。**


<h2 id="site-build">本地构建与发布</h2>

本项目为 [Jure Šorn 的 Python Cheatsheet](https://github.com/gto76/python-cheatsheet) 的简体中文版，维护于 `lang/cn` 分支。正文和自然语言注释使用中文，技术术语、API 和示例代码保留英文。

使用 Node.js 18 或更高版本，在项目根目录运行 `npm ci` 安装锁定的构建依赖，再运行 `npm run build`（或 `node parse.js`）从 README 和页面模板生成首页。运行 `npm test` 检查目录、内部链接及页面内容。目录在构建时按二、三级标题生成；宽屏显示固定侧栏，小屏可折叠。

GitHub Pages 使用 `lang/cn` 分支的根目录发布。更新 README 后，需要重新构建并提交生成的首页，再推送该分支。中文 FAQ 见 [使用说明](web/faq.html)，PDF 仍保留原版。
