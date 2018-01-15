<h1>What is currying</h1>
<p>
    Technique to translate the evaluation of a function that takes
    multiple arguments into evaluating a sequence of functions,
    each with a single argument. Currying is related to,
    but not the same as, partial application. <sup>[1]</sup>
</p>
<pre>
    Simply put curry translates a function with arity (n) parameters to
    single parameter evaluating functions <br/>
    <i>
        f(a,b,c) --> f(a)(b)(c)
    </i>
</pre>
<code>
    function abc(a) {
        return function(x) {
            return function(y) {
                return function(z) {
                    return a(x, y, z);
                }
            }
        }
    }
</code>








<sup>[1]</sup> <a href="https://en.wikipedia.org/wiki/Currying"> Wikipedia - Currying</a>