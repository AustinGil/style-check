export default `
	<section>
		<h2 style="text-align: center;">
			<b>Text: &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;, &lt;p&gt;</b>
		</h2>
		<hr>
		<h1>This is an &lt;h1&gt; tag.
			<b>Here it is bold.</b>
			<em>Here it is italic.
				<b>Here it is with both. </b>
			</em>
			<a href="/">Here is a link.</a>
			<br>
			Here's another line to test line height.
		</h1>
		<p>This line shows the margin between the previous heading and the next paragraph.</p>

		<h2>This is an &lt;h2&gt; tag.
			<b>Here it is bold.</b>
			<em>Here it is italic.
				<b>Here it is with both. </b>
			</em>
			<a href="/">Here is a link</a>
			<br>
			Here's another line to test line height.
		</h2>
		<p>This line shows the margin between the previous heading and the next paragraph.</p>

		<h3>This is an &lt;h3&gt; tag.
			<b>Here it is bold.</b>
			<em>Here it is italic.
				<b>Here it is with</b>
			</em>
			<b>
				<em> both</em>.</b>
			<a href="/">Here is a link</a>
			<br>
			Here's another line to test line height.
		</h3>
		<p>This line shows the margin between the previous heading and the next paragraph.</p>

		<h4>This is an &lt;h4&gt; tag.
			<b>Here it is bold.</b>
			<em>Here it is italic.
				<b>Here it is with both</b>.</em>
			<a href="/">Here is a link</a>
			<br>
			Here's another line to test line height.
		</h4>
		<p>This line shows the margin between the previous heading and the next paragraph.</p>

		<h5>This is an &lt;h5&gt; tag.
			<b>Here it is bold.</b>
			<em>Here it is italic.
				<b>Here it is with both</b>.</em>
			<a href="/">Here is a link</a>
			<br>
			Here's another line to test line height.
		</h5>
		<p>This line shows the margin between the previous heading and the next paragraph.</p>

		<h6>This is an &lt;h6&gt; tag.
			<b>Here it is bold.</b>
			<em>Here it is italic.
				<b>Here it is with both</b>.</em>
			<a href="/">Here is a link</a>
			<br>
			Here's another line to test line height.
		</h6>
		<p>This line shows the margin between the previous heading and the next paragraph.</p>

		<p style="text-align: left;">This is the standard &lt;p&gt; tag.
			<b>Here it is bold.</b>
			<em>Here it is italic.
				<em>
					<b>Here it is with both.</b>
				</em>
			</em>
			<a href="/">Here is a link.</a>
		</p>
		<p>
			<b>This content is left aligned</b>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
			commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
			ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
			enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
			venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
			</p>
		<p style="text-align: right;">
			<b>This content is right aligned</b>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
			commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
			ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
			enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
			venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
			</p>
		<p style="text-align: center;">
			<b>This content is centered</b>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
			commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
			ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
			enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
			venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
			</p>
			<p style="text-align: justify;">
				<b>This content is justified</b>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
				commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
				enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
				venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
			</p>
	</section>
	<!-- Text -->

	<section>
		<hr>
		<h2 style="text-align: center;">
			<b>Media: &lt;img&gt;, &lt;figure&gt;, &lt;figcaption&gt;, &lt;svg&gt;, &lt;iframe&gt; </b>
		</h2>
		<hr>
		<p><b>Image 750x300: &lt;img&gt;</b></p>
		<img src="https://via.placeholder.com/750x300.svg?text=Image+(750x300)" alt="Image example">

		<p><b>Wide Image 2000x600: &lt;img&gt;</b></p>
		<img src="https://via.placeholder.com/2000x600.svg?text=Large+Image+(2000x600)" alt="Wide Image example">

		<p><b>Figure with caption 750x300: &lt;figure&gt;, &lt;caption&gt;</b></p>
		<figure>
			<img src="https://via.placeholder.com/750x300.svg?text=Figure+With+Caption+(750x300)" alt="Figure with caption example">
			<figcaption class="wp-caption-text">This is the caption text</figcaption>
		</figure>

		<p><b>Picture 750x300: &lt;picture&gt;</b></p>
		<picture>
			<img src="https://via.placeholder.com/750x300.svg?text=Image+(750x300)" alt="Image example">
		</picture>

		<p><b>SVG 400x200: &lt;svg&gt;</b></p>
		<svg width="400" height="200">
			<ellipse cx="50%" cy="70%" rx="50%" ry="25%" fill="indigo" />
			<ellipse cx="50%" cy="50%" rx="50%" ry="25%" fill="purple" />
			<ellipse cx="50%" cy="25%" rx="50%" ry="25%" fill="lavender" />
		</svg>

		<p><b>SVG 2000x600: &lt;svg&gt;</b></p>
		<svg width="2000" height="600">
			<ellipse cx="50%" cy="70%" rx="50%" ry="25%" fill="indigo" />
			<ellipse cx="50%" cy="50%" rx="50%" ry="25%" fill="purple" />
			<ellipse cx="50%" cy="25%" rx="50%" ry="25%" fill="lavender" />
		</svg>

		<p><b>SVG 400x200 (viewbox): &lt;svg&gt;</b></p>
		<svg viewbox="0 0 400 200">
			<ellipse cx="50%" cy="70%" rx="50%" ry="25%" fill="indigo" />
			<ellipse cx="50%" cy="50%" rx="50%" ry="25%" fill="purple" />
			<ellipse cx="50%" cy="25%" rx="50%" ry="25%" fill="lavender" />
		</svg>
		
		<p><b>Video: &lt;video&gt;</b></p>
		<video controls>
			<source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/mp4">
		</video>
		<p><b>Audio: &lt;audio&gt;</b></p>
		<audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>

		<p><b>iframe: &lt;iframe&gt;</b></p>
		<iframe src="https://example.com"></iframe>

	</section>
	<!-- Media -->

	<section>
		<hr>
		<h2 style="text-align: center;">
			<b>Data: &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;, &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;, &lt;table&gt;, &lt;th&gt;,
				&lt;tr&gt;, &lt;td&gt;</b>
		</h2>
		<hr>
		<p><b>Unordered List: &lt;ul&gt;</b></p>
		<ul>
			<li>List item one
				<ul>
					<li>List item one
						<ul>
							<li>List item one</li>
							<li>List item two</li>
							<li>List item three</li>
							<li>List item four</li>
						</ul>
					</li>
					<li>List item two</li>
					<li>List item three</li>
					<li>List item four</li>
				</ul>
			</li>
			<li>List item two</li>
			<li>List item three</li>
			<li>List item four</li>
		</ul>

		<p><b>Ordered List: &lt;ol&gt;</b></p>
		<ol>
			<li>List item one
				<ol>
					<li>List item one
						<ol>
							<li>List item one</li>
							<li>List item two</li>
							<li>List item three</li>
							<li>List item four</li>
						</ol>
					</li>
					<li>List item two</li>
					<li>List item three</li>
					<li>List item four</li>
				</ol>
			</li>
			<li>List item two</li>
			<li>List item three</li>
			<li>List item four</li>
		</ol>

		<p><b>Definition List: &lt;dl&gt;</b></p>
		<dl>
			<dd>Definition list division.</dd>
			<dt>Startup</dt>
			<dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and
				scalable business model.
			</dd>
			<dt>dowork</dt>
			<dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self
				motivator, to motivating your friends.</dd>
			<dt>Do It Live</dt>
			<dd>I’ll let Bill O’Reilly
				<a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c" target="_blank">explain</a> this
				one.
				</dd>
		</dl>

		<p><b>Tables: &lt;table&gt;</b></p>
		<table>
			<tbody>
				<tr>
					<th>Employee</th>
					<th>Salary</th>
				</tr>
				<tr>
					<td>
						Jane
					</td>
					<td>$1</td>
					<td>Because that’s all Steve Job’ needed for a salary.</td>
				</tr>
				<tr>
					<td>
						John
					</td>
					<td>$100K</td>
					<td>For all the blogging he does.</td>
				</tr>
				<tr>
					<td>
						Jane
					</td>
					<td>$100M</td>
					<td>Pictures are worth a thousand words, right? So Tom x 1,000.</td>
				</tr>
				<tr>
					<td>
						Jane
					</td>
					<td>$100B</td>
					<td>With hair like that?! Enough said…</td>
				</tr>
			</tbody>
		</table>
	</section>
	<!-- Data -->

	<section>
		<hr>
		<h2 style="text-align: center;">
			<b>Interactive: &lt;button&gt;, &lt;form&gt;, &lt;label&gt;, &lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;,
				&lt;fieldset&gt;,
				&lt;legend&gt;</b>
		</h2>
		<hr>

		<p><button>This is a button</button></p>
		<p><button disabled>This is a disabled button</button></p>

		<form>
			<label>Label</label>
			<br>
			<br>
			
			<span>Input (Don't forget to test focus state)</span>
			<br>
			<input>
			<br>
			<br>
			<span>Input (disabled)</span>
			<br>
			<input disabled>
			<br>
			<br>
			<span>Input (valid)</span>
			<br>
			<input required value="I have a value">
			<br>
			<br>
			<span>Input (invalid)</span>
			<br>
			<input required>
			<br>
			<br>
			<span>Input (readonly)</span>
			<br>
			<input readonly>
			<br>
			<br>
			<span>Input (type="button")</span>
			<br>
			<input type="button" value="Button">
			<br>
			<br>
			<span>Input (type="checkbox")</span>
			<br>
			<label>
				<input type="checkbox" name="checkbox">
				Checkbox 1
			</label>
			<label>
				<input type="checkbox" name="checkbox">
				Checkbox 2
			</label>
			<label>
				<input type="checkbox" name="checkbox">
				Checkbox 3
			</label>
			<br>
			<br>
			<span>Input (type="color")</span>
			<br>
			<input type="color">
			<br>
			<br>
			<span>Input (type="date")</span>
			<br>
			<input type="date">
			<br>
			<br>
			<span>Input (type="datetime-local")</span>
			<br>
			<input type="datetime-local">
			<br>
			<br>
			<span>Input (type="email")</span>
			<br>
			<input type="email">
			<br>
			<br>
			<span>Input (type="file")</span>
			<br>
			<input type="file">
			<br>
			<br>
			<span>Input (type="hidden")</span>
			<br>
			<input type="hidden">
			<br>
			<br>
			<span>Input (type="image")</span>
			<br>
			<input type="image">
			<br>
			<br>
			<span>Input (type="month")</span>
			<br>
			<input type="month">
			<br>
			<br>
			<span>Input (type="number")</span>
			<br>
			<input type="number">
			<br>
			<br>
			<span>Input (type="password")</span>
			<br>
			<input type="password">
			<br>
			<br>
			<span>Input (type="checkbox")</span>
			<br>
			<label>
				<input type="radio" name="radio">
				Radio 1
			</label>
			<label>
				<input type="radio" name="radio">
				Radio 2
			</label>
			<label>
				<input type="radio" name="radio">
				Radio 3
			</label>
			<br>
			<br>
			<span>Input (type="range")</span>
			<br>
			<input type="range">
			<br>
			<br>
			<span>Input (type="reset")</span>
			<br>
			<input type="reset">
			<br>
			<br>
			<span>Input (type="search")</span>
			<br>
			<input type="search">
			<br>
			<br>
			<span>Input (type="submit")</span>
			<br>
			<input type="submit">
			<br>
			<br>
			<span>Input (type="tel")</span>
			<br>
			<input type="tel">
			<br>
			<br>
			<span>Input (type="text")</span>
			<br>
			<input type="text">
			<br>
			<br>
			<span>Input (type="time")</span>
			<br>
			<input type="time">
			<br>
			<br>
			<span>Input (type="url")</span>
			<br>
			<input type="url">
			<br>
			<br>
			<span>Input (type="week")</span>
			<br>
			<input type="week">
			<br>
			<br>
			<span>Select</span>
			<br>
			<select>
				<option value="1">Option 1</option>
				<option value="2" disabled="">Option 2 (disabled)</option>
				<option value="3">Option 3</option>
			</select>
			<br>
			<br>
			<span>Textarea</span>
			<br>
			<textarea></textarea>
			<br>
			<br>
			<fieldset>
				<legend>Fieldset with Legend:</legend>
				<label>Name:
					<input type="text">
				</label>
				<label>Email:
					<input type="email">
				</label>
			</fieldset>
		</form>
	</section>
	<!-- Interactive -->

	<section>
		<hr>
		<h2 style="text-align: center;">
			<b>Miscellaneous Content</b>
		</h2>
		<hr>
		<p><b>Text Overflow</b></p>
		<div style="border: 1px solid; max-width: 300px;">
			<p>ToTestWhiteSpaceWrappingThisIsAVeryLongWordThatIsLongerThanItsAvailableWidth</p>
		</div>

		<p>
			<b>Progress: &lt;progress&gt;</b>
		</p>
		<progress max="100" value="60"></progress>

		<p>
			<b>Meter: &lt;meter&gt;</b>
		</p>
		<p>(default/optimal)</p>
		<meter value="90" min="0" low="70" high="80" max="100" optimum="90"></meter>
		<p>(not optimal)</p>
		<meter value="75" min="0" low="70" high="80" max="100" optimum="90"></meter>
		<p>(very not optimal)</p>
		<meter value="60" min="0" low="70" high="80" max="100" optimum="90"></meter>

		<p>
			<b>Details/Summary: &lt;details&gt;, &lt;summary&gt;</b>
		</p>
		<details>
			<summary>Details</summary>
			Something small enough to escape casual notice.
		</details>
		<p>
			<b>Address: &lt;address&gt;</b>
		</p>
		<address>1 Infinite Loop<br> Cupertino, CA 95014<br> United States</address>
		<p>
			<b>Abbreviation: &lt;abbr&gt;</b>
		</p>
		<p>The abbreviation
			<abbr title="Seriously">srsly</abbr> stands for “seriously”.
			</p>
		<p>
			<b>Acronym: &lt;acronym&gt;</b>
		</p>
		<p>The acronym
			<acronym title="For The Win">ftw</acronym> stands for “for the win”.
			</p>
			<p>
				<b>Blockquotes: &lt;blockquote&gt;</b>
			</p>
			<blockquote>
				<p>This is a single line blockquote.</p>
			</blockquote>
			<blockquote>
				<p>This is a multi-line blockquote that includes a citation at the ed. People think focus means saying yes to the
					thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good
					ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the
					things I have done. Innovation is saying no to 1,000 things.
					<cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite>
				</p>
			</blockquote>
		<p>
			<b>Cite: &lt;cite&gt;</b>
		</p>
		<p>“Code is poetry.” –
			<cite>Automattic</cite>
		</p>

		<p><b>Pre: &lt;pre&gt;</b></p>
		<pre>{
  "json": "example"
}</pre>

		<p><b>Pre (spaces, tabs, overflow): &lt;pre&gt;</b></p>
		<pre style="width: 300px;">{
  "spaces": "This line uses spaces",
	"tabs": "This line uses tabs",
  "longUrl": "https://this-is-a-very-long-word-that-stretches-beyond-the-width-of-its-container.com",
  "longWord": "thisIsAVeryLongWordThatStretchesBeyondTheWidthOfItsContainer",
}</pre>
		<p>
			<b>Code: &lt;code&gt;</b>
		</p>
		<p>Example text that looks like code: <code>word-wrap: break-word;</code>.</p>
		<p>
			<b>Strike or Delete: &lt;strike&gt;, &lt;del&gt;</b>
		</p>
		<p>This tag will let you
			<del>strikeout text.</del> Note that the &lt;del&gt; tag is no longer supported in HTML5 so use the
			<code>&lt;strike&gt;</code> instead.
			</p>
		<p>
			<b>Insert: &lt;ins&gt;</b>
		</p>
		<p>This tag should denote
			<ins>inserted</ins> text.
			</p>
		<p>
			<b>Keyboard: &lt;kbd&gt;</b>
		</p>
		<p>This scarcely known tag emulates
			<kbd>keyboard text</kbd>, which is usually styled like the
			<code>&lt;code&gt;</code> tag.
			</p>
		<p>
			<b>Quote: &lt;q&gt;</b>
		</p>
		<p>
			<q>Developers, developers, developers…</q> –Steve Ballmer
			</p>
			<p>
				<b>Small: &lt;small&gt;</b>
			</p>
			<p>Want to see some small text? <small>Here you go!</small></p>
		<p>
			<b>Subscript: &lt;sub&gt;</b>
		</p>
		<p>Getting our science styling on with H
			<sub>2</sub>O, which should push the “2″ down.
			</p>
		<p>
			<b>Superscript: &lt;sup&gt;</b>
		</p>
		<p>Still sticking with science and Albert Einstein’s E=mc
			<sup>2</sup>, which should lift the 2 up.
			</p>
		<p>
			<b>Teletype: &lt;tt&gt;</b>
		</p>
		<p>This rarely used tag emulates
			<tt>teletype text</tt>, which is usually styled like the
			<code>&lt;code&gt;</code> tag.
			</p>
		<p>
			<b>Variable: &lt;var&gt;</b>
		</p>
		<p>This allows you to denote <var>variables</var>.</p>
	</section>
	<!-- Misc -->`
