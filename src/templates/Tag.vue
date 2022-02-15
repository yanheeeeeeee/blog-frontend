<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" :style="'background-image: url(/img/post-bg.jpg)'">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1 style="text-align:center;">#{{$page.tag.name}}</h1>
              <!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
              <!-- <span class="meta">Posted by
                <a href="#">{{$page.post.author.username}}</a>
                on {{$page.post.created_at}}</span> -->
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post list -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
            <g-link :to="'/post/' + post.id">
              <h2 class="post-title">
                {{ post.title }}
              </h2>
            </g-link>
            <hr />
          </div>
        </div>
      </div>
    </div> -->
  </Layout>
</template>

<page-query>
query($id: ID){
  tag: strapiTag(id:$id){
    id
    name
    posts{
      id
      title
    }
  }
}
</page-query>

<script>
// 引入MarkdownIt处理markdown格式的内容为html格式
import MarkdownIt from "markdown-it"
const md = new MarkdownIt();
export default {
  name: "PostPage",

  methods:{
    mdToHtml(markdown){
      return md.render(markdown)
    }
  }
}
</script>
<style lang="">
</style>