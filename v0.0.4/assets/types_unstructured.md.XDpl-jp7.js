import{_ as n,C as d,c as r,o as l,ai as s,j as t,a as o,G as a}from"./chunks/framework.DZ_7X-0i.js";const T=JSON.parse('{"title":"Unstructured","description":"","frontmatter":{},"headers":[],"relativePath":"types/unstructured.md","filePath":"types/unstructured.md","lastUpdated":null}'),c={name:"types/unstructured.md"},p={class:"jldocstring custom-block",open:""},u={class:"jldocstring custom-block",open:""};function g(h,e,b,_,f,k){const i=d("Badge");return l(),r("div",null,[e[6]||(e[6]=s('<h1 id="unstructured" tabindex="-1">Unstructured <a class="header-anchor" href="#unstructured" aria-label="Permalink to &quot;Unstructured&quot;">​</a></h1><p>The <code>UnstructuredGrid</code> type can be further subdivided into two different types based on the <code>GeoRegion</code> type:</p><ul><li><p>Mapping unstructured lon-lat data to a <code>RectRegion</code> or <code>PolyRegion</code> returns a <code>VectorMask</code> type.</p></li><li><p>Mapping unstructured lon-lat data to a <code>TiltRegion</code> returns a <code>VectorTilt</code> type.</p></li></ul>',3)),t("details",p,[t("summary",null,[e[0]||(e[0]=t("a",{id:"RegionGrids.VectorMask",href:"#RegionGrids.VectorMask"},[t("span",{class:"jlbinding"},"RegionGrids.VectorMask")],-1)),e[1]||(e[1]=o()),a(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[2]||(e[2]=s('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VectorMask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> UnstructuredGrid</span></span></code></pre></div><p>Information on a <code>UnstructuredGrid</code> type that is extracted based on vectors of longitude and latitude points.</p><p><a href="https://github.com/GeoRegionsEcosystem/RegionGrids.jl/blob/2bbca5df2618f7fe74de8d8fab22c1941d2eabb3/src/RegionGrids.jl#L134-L138" target="_blank" rel="noreferrer">source</a></p>',3))]),t("details",u,[t("summary",null,[e[3]||(e[3]=t("a",{id:"RegionGrids.VectorTilt",href:"#RegionGrids.VectorTilt"},[t("span",{class:"jlbinding"},"RegionGrids.VectorTilt")],-1)),e[4]||(e[4]=o()),a(i,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[5]||(e[5]=s('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VectorTilt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> UnstructuredGrid</span></span></code></pre></div><p>Information on a <code>UnstructuredGrid</code> type that is extracted based on vectors of longitude and latitude points.</p><p>A <code>VectorTilt</code> type will also contain the following fields:</p><ul><li><p><code>rotX</code> - A vector of <code>Float</code>s, defining indices of the parent longitude vector describing the region</p></li><li><p><code>rotY</code> - A vector of <code>Float</code>s, defining indices of the parent latitude vector describing the region</p></li></ul><p><a href="https://github.com/GeoRegionsEcosystem/RegionGrids.jl/blob/2bbca5df2618f7fe74de8d8fab22c1941d2eabb3/src/RegionGrids.jl#L146-L154" target="_blank" rel="noreferrer">source</a></p>',5))])])}const m=n(c,[["render",g]]);export{T as __pageData,m as default};
