import{_ as n,C as d,c as l,o as r,ai as a,j as i,a as s,G as o}from"./chunks/framework.DZ_7X-0i.js";const k=JSON.parse('{"title":"Generalized","description":"","frontmatter":{},"headers":[],"relativePath":"types/generalized.md","filePath":"types/generalized.md","lastUpdated":null}'),p={name:"types/generalized.md"},c={class:"jldocstring custom-block",open:""},g={class:"jldocstring custom-block",open:""};function h(u,e,b,f,_,y){const t=d("Badge");return r(),l("div",null,[e[6]||(e[6]=a('<h1 id="generalized" tabindex="-1">Generalized <a class="header-anchor" href="#generalized" aria-label="Permalink to &quot;Generalized&quot;">​</a></h1><p>The <code>GeneralizedGrid</code> type can be further subdivided into two different types based on the <code>GeoRegion</code> type:</p><ul><li><p>Mapping generalized gridded lon-lat data to a <code>RectRegion</code> or <code>PolyRegion</code> returns a <code>GeneralMask</code> type.</p></li><li><p>Mapping generalized gridded lon-lat data to a <code>TiltRegion</code> returns a <code>GeneralTilt</code> type.</p></li></ul>',3)),i("details",c,[i("summary",null,[e[0]||(e[0]=i("a",{id:"RegionGrids.GeneralMask",href:"#RegionGrids.GeneralMask"},[i("span",{class:"jlbinding"},"RegionGrids.GeneralMask")],-1)),e[1]||(e[1]=s()),o(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[2]||(e[2]=a('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GeneralMask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GeneralizedGrid</span></span></code></pre></div><p>Information on a <code>GeneralizedGrid</code> type that is extracted based on arrays of longitude/latitude points.</p><p><a href="https://github.com/GeoRegionsEcosystem/RegionGrids.jl/blob/2bbca5df2618f7fe74de8d8fab22c1941d2eabb3/src/RegionGrids.jl#L87-L91" target="_blank" rel="noreferrer">source</a></p>',3))]),i("details",g,[i("summary",null,[e[3]||(e[3]=i("a",{id:"RegionGrids.GeneralTilt",href:"#RegionGrids.GeneralTilt"},[i("span",{class:"jlbinding"},"RegionGrids.GeneralTilt")],-1)),e[4]||(e[4]=s()),o(t,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[5]||(e[5]=a('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GeneralTilt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GeneralizedGrid</span></span></code></pre></div><p>Information on a <code>GeneralizedGrid</code> type that is extracted based on arrays of longitude/latitude points.</p><p>In addition to all the fields common to the <code>GeneralizedGrid</code> abstract type, <code>RegionTilt</code>s type will also contain the following fields:</p><ul><li><p><code>rotX</code> - An array of <code>Float</code>s, defining indices of the parent longitude vector describing the region</p></li><li><p><code>rotY</code> - An array of <code>Float</code>s, defining indices of the parent latitude vector describing the region</p></li></ul><p><a href="https://github.com/GeoRegionsEcosystem/RegionGrids.jl/blob/2bbca5df2618f7fe74de8d8fab22c1941d2eabb3/src/RegionGrids.jl#L101-L109" target="_blank" rel="noreferrer">source</a></p>',5))])])}const T=n(p,[["render",h]]);export{k as __pageData,T as default};
