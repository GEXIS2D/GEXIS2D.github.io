---
layout: software
title: Soil Model
permalink: /theory/soil-model/
---

<article class="container document soil-model-page">
<div class="breadcrumb"><a href="{{ '/theory/' | relative_url }}">Theory</a> / Soil Model</div>
<h1>Soil Constitutive Models</h1>
<section id="soil-model-summary" class="soil-model-summary" aria-labelledby="soil-model-summary-title">
<h2 id="soil-model-summary-title">1. Summary of soil models</h2>
<table class="soil-model-table"><caption class="visually-hidden">Summary of soil constitutive models available in GEXIS</caption>
<colgroup><col class="model-name-column"><col class="model-type-column"><col class="model-soils-column"><col class="model-capability-column"></colgroup>
<thead><tr><th scope="col">Model</th><th scope="col">Constitutive type</th><th scope="col">Suitable soils</th><th scope="col">Main capability</th></tr></thead><tbody>
<tr><th scope="row"><a href="#mohr-coulomb">Mohr–Coulomb (MC)</a></th>
<td data-label="Constitutive type">Elastic–perfectly plastic</td>
<td data-label="Suitable soils">Sands and clays</td>
<td data-label="Main capability">Frictional–cohesive shear strength and failure; dilatancy controlled by the dilation angle</td>
</tr>
<tr><th scope="row"><a href="#modified-cam-clay">Modified Cam-Clay (MCC)</a></th>
<td data-label="Constitutive type">Elasto-plastic (critical state, isotropic hardening)</td>
<td data-label="Suitable soils">Clays</td>
<td data-label="Main capability">Stress-dependent compression, volumetric hardening and critical-state failure</td>
</tr>
<tr><th scope="row"><a href="#hypoplastic">Hypoplastic model</a></th>
<td data-label="Constitutive type">Rate-type, incrementally non-linear</td>
<td data-label="Suitable soils">Sands and clays</td>
<td data-label="Main capability">Non-linear, pressure- and state-dependent stiffness and dilatancy</td>
</tr>
<tr><th scope="row"><a href="#anisotropic-clay">Anisotropic clay model</a></th>
<td data-label="Constitutive type">Anisotropic elasto-plastic (critical state, bounding surface)</td>
<td data-label="Suitable soils">Clays, including natural anisotropic and sensitive clays</td>
<td data-label="Main capability">Inherent and evolving anisotropy under monotonic and cyclic loading; hysteresis and cyclic degradation</td>
</tr>
<tr><th scope="row"><a href="#high-cycle-accumulation">High-cycle accumulation (HCA) model</a></th>
<td data-label="Constitutive type">Explicit accumulation (cycle-number based)</td>
<td data-label="Suitable soils">Sands and clays</td>
<td data-label="Main capability">Accumulation of permanent strain under small-amplitude cyclic loading, up to the million-cycle level</td>
</tr>
<tr><th scope="row"><a href="#creep">Creep model</a></th>
<td data-label="Constitutive type">Elasto-viscoplastic (overstress, critical state)</td>
<td data-label="Suitable soils">Soft clays</td>
<td data-label="Main capability">Time-dependent behaviour: creep, stress relaxation and strain-rate-dependent stiffness and strength</td>
</tr>
</tbody></table></section>
<section class="soil-model-descriptions" aria-labelledby="soil-model-descriptions-title">
<h2 id="soil-model-descriptions-title">2. Model descriptions</h2>
<section id="mohr-coulomb" class="soil-model-detail"><h3>Mohr–Coulomb (MC)</h3>
<p>An elastic–perfectly plastic model combining linear isotropic elasticity with the Mohr–Coulomb failure criterion (Coulomb, 1776; Mohr, 1900). Stiffness is constant, and plastic flow occurs at constant strength once the failure envelope is reached, with volume change governed by the dilation angle. The model is simple and needs few parameters, so it provides a first-order estimate of failure and is suited to strength-governed problems.</p>
<div class="soil-model-references"><h4>References</h4><ul>
<li>Mohr O, 1900. Welche Umstände bedingen die Elastizitätsgrenze und den Bruch eines Materials? Zeitschrift des Vereines Deutscher Ingenieure, 44(45), 1524-1530.</li>
<li>Coulomb CA, 1776. Essai sur une application des règles de maximis et minimis à quelques problèmes de statique, relatifs à l’architecture. Mémoires de Mathématique et de Physique, présentés à l’Académie Royale des Sciences par divers savans, 7, 343-382.</li>
</ul></div>
</section>
<section id="modified-cam-clay" class="soil-model-detail"><h3>Modified Cam-Clay (MCC)</h3>
<p>The classical critical-state model for clay (Roscoe and Burland, 1968). An elliptical yield surface in the p′–q plane hardens with plastic volumetric strain, so the soil stiffens on compression, contracts or dilates according to its overconsolidation state, and approaches the critical state at large shear strain. It is especially suited to normally consolidated and lightly overconsolidated clays under monotonic loading.</p>
<div class="soil-model-references"><h4>References</h4><ul>
<li>Roscoe KH, Burland JB, 1968. On the generalised stress-strain behaviour of ‘wet’ clay. In: Heyman J, Leckie FA (eds), Engineering Plasticity, 535-609. Cambridge University Press.</li>
</ul></div>
</section>
<section id="hypoplastic" class="soil-model-detail"><h3>Hypoplastic model</h3>
<p>A rate-type, incrementally non-linear model in which the stress rate is a non-linear function of the current stress, void ratio and strain rate, without a yield surface or a split into elastic and plastic strains. The model represents the non-linear, pressure- and state-dependent stiffness and dilatancy of soil. Versions for sand (von Wolffersdorff, 1996) and for clay (Mašín, 2005) are available: the sand version is built around a predefined limit state surface, and the clay version combines the hypoplastic structure with critical-state concepts.</p>
<div class="soil-model-references"><h4>References</h4><ul>
<li>Mašín D, 2005. A hypoplastic constitutive model for clays. International Journal for Numerical and Analytical Methods in Geomechanics, 29(4), 311-336. <a href="https://doi.org/10.1002/nag.416">DOI</a></li>
<li>von Wolffersdorff PA, 1996. A hypoplastic relation for granular materials with a predefined limit state surface. Mechanics of Cohesive-Frictional Materials, 1(3), 251-271. <a href="https://doi.org/10.1002/(SICI)1099-1484(199607)1:3%3C251::AID-CFM13%3E3.0.CO;2-3">DOI</a></li>
</ul></div>
</section>
<section id="anisotropic-clay" class="soil-model-detail"><h3>Anisotropic clay model</h3>
<p>This model builds upon the SANICLAY simple anisotropic clay plasticity model of Dafalias et al. (2006), an extension of Modified Cam-Clay in which the yield surface is inclined in stress space. The inclination, described by a deviatoric tensor variable that evolves through a rotational hardening law, represents the anisotropy of natural clays arising from deposition and K<sub>0</sub> consolidation. For cyclic loading, the bounding-surface formulation of Seidalinov and Taiebat (2014) is adopted, with a repositioned projection centre and a damage parameter to capture hysteresis and cyclic degradation. The model describes the monotonic and cyclic behaviour of normally consolidated and overconsolidated clays.</p>
<div class="soil-model-references"><h4>References</h4><ul>
<li>Seidalinov G, Taiebat M, 2014. Bounding surface SANICLAY plasticity model for cyclic clay behavior. International Journal for Numerical and Analytical Methods in Geomechanics, 38(7), 702-724. <a href="https://doi.org/10.1002/nag.2229">DOI</a></li>
<li>Dafalias YF, Manzari MT, Papadimitriou AG, 2006. SANICLAY: simple anisotropic clay plasticity model. International Journal for Numerical and Analytical Methods in Geomechanics, 30(12), 1231-1257. <a href="https://doi.org/10.1002/nag.524">DOI</a></li>
</ul></div>
</section>
<section id="high-cycle-accumulation" class="soil-model-detail"><h3>High-cycle accumulation (HCA) model</h3>
<p>This model builds upon the high-cycle accumulation (HCA) approach of Niemunis et al. (2005) and Wichtmann (2016), which predicts the accumulation of permanent strain, or of excess pore pressure under undrained conditions, in soil subjected to a large number of small-amplitude cycles, up to the million-cycle level. Rather than resolving every cycle, the accumulation per cycle is computed explicitly from the strain amplitude, average stress, soil state and number of cycles. Versions for sand and clay are available. The model is intended for the long-term deformation of geotechnical structures under repeated loading, for example offshore foundations.</p>
<div class="soil-model-references"><h4>References</h4><ul>
<li>Wichtmann T, 2016. Soil behaviour under cyclic loading – experimental observations, constitutive description and applications. Habilitation thesis, Publications of the Institute of Soil Mechanics and Rock Mechanics, Karlsruhe Institute of Technology, Issue 181.</li>
<li>Niemunis A, Wichtmann T, Triantafyllidis Th, 2005. A high-cycle accumulation model for sand. Computers and Geotechnics, 32(4), 245-263. <a href="https://doi.org/10.1016/j.compgeo.2005.03.002">DOI</a></li>
</ul></div>
</section>
<section id="creep" class="soil-model-detail"><h3>Creep model</h3>
<p>An elasto-viscoplastic model for the time-dependent behaviour of soft clay based on the overstress concept. Based on the plenty of experimental data in previous study, the relationship between viscoplastic strain rate and the stress ratio is accurately described. Unlike Modified Cam-Clay, the model has no purely elastic domain: viscoplastic strain develops at every stress state, at a rate that increases as a power of the ratio between an equivalent pressure on the Modified Cam-Clay ellipse and a reference preconsolidation pressure.  When the soil compression index, swelling index, second compression coefficient, and current void ratio are precisely determined, the time-dependent small or large deformation can be predicted. The model therefore captures creep under constant load, stress relaxation under constant strain, and stiffness and strength responses influenced by strain rate effect. It is suited to long-term settlement of clay and various strain rate-dependent problems.</p>
<div class="soil-model-references"><h4>References</h4><ul>
<li>Yin ZY, Chang CS, Karstunen M, Hicher PY, 2010. An anisotropic elastic-viscoplastic model for soft clays. International Journal of Solids and Structures, 47(5), 665-677. <a href="https://doi.org/10.1016/j.ijsolstr.2009.11.004">DOI</a></li>
</ul></div>
</section>
</section></article>
