export default `
<div>

	<h2 style="text-align: center;">
		<strong>Headers: &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;</strong>
	</h2>
	<hr>
	<h1>This is an &lt;h1&gt; tag.
		<strong>Here it is bold.</strong>
		<em>Here it is italic.
			<strong>Here it is with both. </strong>
		</em>
		<a href="#">Here is a link.</a>
		<br>
		Here's another line to test line height.
	</h1>
	<p>This line shows the margin between the previous heading and the next paragraph.</p>
	
	<h2>This is an &lt;h2&gt; tag.
		<strong>Here it is bold.</strong>
		<em>Here it is italic.
			<strong>Here it is with both. </strong>
		</em>
		<a href="#">Here is a link</a>
		<br>
		Here's another line to test line height.
	</h2>
	<p>This line shows the margin between the previous heading and the next paragraph.</p>
	
	<h3>This is an &lt;h3&gt; tag.
		<strong>Here it is bold.</strong>
		<em>Here it is italic.
			<strong>Here it is with</strong>
		</em>
		<strong>
			<em> both</em>.</strong>
		<a href="#">Here is a link</a>
		<br>
		Here's another line to test line height.
	</h3>
	<p>This line shows the margin between the previous heading and the next paragraph.</p>
	
	<h4>This is an &lt;h4&gt; tag.
		<strong>Here it is bold.</strong>
		<em>Here it is italic.
			<strong>Here it is with both</strong>.</em>
		<a href="#">Here is a link</a>
		<br>
		Here's another line to test line height.
	</h4>
	<p>This line shows the margin between the previous heading and the next paragraph.</p>
	
	<h5>This is an &lt;h5&gt; tag.
		<strong>Here it is bold.</strong>
		<em>Here it is italic.
			<strong>Here it is with both</strong>.</em>
		<a href="#">Here is a link</a>
		<br>
		Here's another line to test line height.
	</h5>
	<p>This line shows the margin between the previous heading and the next paragraph.</p>
	
	<h6>This is an &lt;h6&gt; tag.
		<strong>Here it is bold.</strong>
		<em>Here it is italic.
			<strong>Here it is with both</strong>.</em>
		<a href="#">Here is a link</a>
		<br>
		Here's another line to test line height.
	</h6>
	<p>This line shows the margin between the previous heading and the next paragraph.</p>
	
</div>
<!-- Headings -->

<div>
	<hr>
	<h2 style="text-align: center;">
		<strong>Paragraphs: &lt;p&gt;</strong>
	</h2>
	<hr>
	<p style="text-align: left;">This is the standard &lt;p&gt; tag.
		<strong>Here it is bold.</strong>
		<em>Here it is italic.
			<em>
				<strong>Here it is with both.</strong>
			</em>
		</em>
		<a href="#">Here is a link.</a>
	</p>
	<p>
		<strong>This content is left justified</strong>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
	<p style="text-align: right;">
		<strong>This content is right justified</strong>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
	<p style="text-align: center;">
		<strong>This content is centered</strong>: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
	</div>
<!-- Paragraphs -->

<div>
	<hr>
	<h2 style="text-align: center;">
		<strong>Images: &lt;img&gt;, &lt;figure&gt;, &lt;figcaption&gt; </strong>
	</h2>
	<hr>
	<img src="https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=Image%0A&amp;w=750&amp;h=500" alt="Image example">
	
	<figure>
		<img src="https://placeholdit.imgix.net/~text?txtsize=33&amp;txt=Figure%20With%20Caption%0A&amp;w=750&amp;h=500" alt="Figure with caption example">
		<figcaption class="wp-caption-text">This is the caption text</figcaption>
	</figure>
	
</div>
<!-- Images -->

<div>
	<hr>
	<h2 style="text-align: center;">
		<strong>Unordered Lists: &lt;ul&gt;, &lt;li&gt;</strong>
	</h2>
	<hr>
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

	<hr>
	<h2 style="text-align: center;">
		<strong>Ordered List: &lt;ol&gt;, &lt;li&gt;</strong>
	</h2>
	<hr>
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

		<hr>
		<h2 style="text-align: center;">
			<strong>Definition Lists: &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</strong>
		</h2>
		<hr>
		<dl>
			<dd>Definition list division.</dd>
			<dt>Startup</dt>
			<dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.
			</dd>
			<dt>#dowork</dt>
			<dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.</dd>
			<dt>Do It Live</dt>
			<dd>I’ll let Bill O’Reilly
			<a title="We'll Do It Live" href="https://www.youtube.com/watch?v=O_HyZ5aW76c" target="_blank">explain</a> this one.</dd>
	</dl>
</div>
<!-- Lists -->

<div>
	<hr>
	<h2 style="text-align: center;">
		<strong>Tables: &lt;table&gt;, &lt;th&gt;, &lt;tr&gt;, &lt;td&gt;</strong>
	</h2>
	<hr>
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
</div>
<!-- Tables -->

<div>
	<hr>
	<h2 style="text-align: center;">
		<strong>Blockquotes: &lt;blockquote&gt;</strong>
	</h2>
	<hr>
	<blockquote>
		<p>This is a single line blockquote.</p>
	</blockquote>
	<blockquote>
		<p>This is a multi-line blockquote that includes a citation at the ed. People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things.
			<cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite>
		</p>
	</blockquote>
</div>
<!-- Blockquotes -->

<div>
	<hr>
	<h2 style="text-align: center;">
		<strong>Forms: &lt;form&gt;, &lt;label&gt;, &lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;, &lt;textarea&gt;</strong>
	</h2>
	<p><strong>NOTE:</strong> These form fields are placed WITHIN wrapping labels. Some implementations keep the labels and inputs separate. This may affect your styles.</p>
	<hr>

	<form>
		<label>Input (type="button")
			<input type="button" value="Button">
		</label>
		<label>
			<input type="checkbox" name="checkbox">
			Input (type="checkbox") 1
		</label>
		<label>
			<input type="checkbox" name="checkbox">
			Input (type="checkbox") 2
		</label>
		<label>
			<input type="checkbox" name="checkbox">
			Input (type="checkbox") 3
		</label>
		<label>Input (type="color")
			<input type="color">
		</label>
		<label>Input (type="date")
			<input type="date">
		</label>
		<label>Input (type="datetime-local")
			<input type="datetime-local">
		</label>
		<label>Input (type="email")
			<input type="email">
		</label>
		<label>Input (type="file")
			<input type="file">
		</label>
		<label>Input (type="hidden")
			<input type="hidden">
		</label>
		<label>Input (type="image")
			<input type="image">
		</label>
		<label>Input (type="month")
			<input type="month">
		</label>
		<label>Input (type="number")
			<input type="number">
		</label>
		<label>Input (type="password")
			<input type="password">
		</label>
		<label>
			<input type="radio" name="radio">
			Input (type="radio") 1
		</label>
		<label>
			<input type="radio" name="radio">
			Input (type="radio") 2
		</label>
		<label>
			<input type="radio" name="radio">
			Input (type="radio") 3
		</label>
		<label>Input (type="range")
			<input type="range">
		</label>
		<label>Input (type="reset")
			<input type="reset">
		</label>
		<label>Input (type="search")
			<input type="search">
		</label>
		<label>Input (type="submit")
			<input type="submit">
		</label>
		<label>Input (type="tel")
			<input type="tel">
		</label>
		<label>Input (type="text")
			<input type="text">
		</label>
		<label>Input (type="time")
			<input type="time">
		</label>
		<label>Input (type="url")
			<input type="url">
		</label>
		<label>Input (type="week")
			<input type="week">
		</label>
		<label>Disabled Input
			<input type="text" disabled>
		</label>
		<label>Select
			<select>
				<option value="1">Option 1</option>
				<option value="2" disabled>Option 2 (disabled)</option>
				<option value="3">Option 3</option>
			</select>
		</label>
		<label>Textarea
			<textarea></textarea>
		</label>
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
</div>
<!-- Forms -->

<div>
	<hr>
	<h2 style="text-align: center;">
		<strong>Miscellaneous Content</strong>
	</h2>
	<hr>
	<p>
		<strong>Address Tag: &lt;address&gt;</strong>
	</p>
	<address>1 Infinite Loop<br> Cupertino, CA 95014<br> United States</address>
	<p>
		<strong>Abbreviation Tag: &lt;abbr&gt;</strong>
	</p>
	<p>The abbreviation
		<abbr title="Seriously">srsly</abbr> stands for “seriously”.</p>
	<p>
		<strong>Acronym Tag: &lt;acronym&gt;</strong>
	</p>
	<p>The acronym
		<acronym title="For The Win">ftw</acronym> stands for “for the win”.</p>
	<p>
		<strong>Cite Tag: &lt;cite&gt;</strong>
	</p>
	<p>“Code is poetry.” –
		<cite>Automattic</cite>
	</p>
	<p>
		<strong>Code Tag: &lt;code&gt;</strong>
	</p>
	<p>This is great for developers to display test that is intended for code such as
		<code>word-wrap: break-word;</code>.</p>
	<p>
		<strong>Strike or Delete Tag: &lt;strike&gt;, &lt;del&gt;</strong>
	</p>
	<p>This tag will let you
		<del>strikeout text.</del> Note that the &lt;del&gt; tag is no longer supported in HTML5 so use the
		<code>&lt;strike&gt;</code> instead.</p>
	<p>
		<strong>Insert Tag: &lt;ins&gt;</strong>
	</p>
	<p>This tag should denote
		<ins>inserted</ins> text.</p>
	<p>
		<strong>Keyboard Tag: &lt;kbd&gt;</strong>
	</p>
	<p>This scarcely known tag emulates
		<kbd>keyboard text</kbd>, which is usually styled like the
		<code>&lt;code&gt;</code> tag.</p>
	<p>
		<strong>Quote Tag: &lt;q&gt;</strong>
	</p>
	<p>
		<q>Developers, developers, developers…</q> –Steve Ballmer</p>
	<p>
		<strong>Subscript Tag: &lt;sub&gt;</strong>
	</p>
	<p>Getting our science styling on with H
		<sub>2</sub>O, which should push the “2″ down.</p>
	<p>
		<strong>Superscript Tag: &lt;sup&gt;</strong>
	</p>
	<p>Still sticking with science and Albert Einstein’s E=mc
		<sup>2</sup>, which should lift the 2 up.</p>
	<p>
		<strong>Teletype Tag: &lt;tt&gt;</strong>
	</p>
	<p>This rarely used tag emulates
		<tt>teletype text</tt>, which is usually styled like the
		<code>&lt;code&gt;</code> tag.</p>
	<p>
		<strong>Variable Tag: &lt;var&gt;</strong>
	</p>
	<p>This allows you to denote<var>variables</var>.</p>
</div>
<!-- Misc -->`