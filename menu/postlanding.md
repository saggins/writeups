---
layout: menu
---

{%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
{%- endif -%}
{% if site.paginate %}
    {% assign posts = paginator.posts %}
{% else %}
    {% assign posts = site.posts %}
{% endif %}
{%- if posts.size > 0 -%}
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    {%- for post in posts -%}
        <a class="post-link" href="{{ post.url | relative_url }}">
            \> [{{ post.date | date: date_format }}] {{ post.title | escape }}
        </a> <br>
    {%- endfor -%}
{%- endif -%}
