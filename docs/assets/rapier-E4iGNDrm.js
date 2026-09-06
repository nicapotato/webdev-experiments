import { R as s, __tla as __tla_0 } from "./Game-05MmDeUc.js";
import { A as t, a as l, b as n, B as r, c as d, C as p, d as u, e as C, f as y, g as c, h as m, i as P, j as R, k as g, l as J, D as M, m as S, E as h, F as v, n as I, o as b, H as f, p as T, I as x, q as F, r as B, s as A, J as D, t as H, u as k, K as E, M as j, v as V, w as O, x as Q, N as U, P as q, y as w, z, G as K, L as N, O as W, Q as G, S as L, T as X, U as Y, V as Z, W as _, X as $, Y as aa, Z as sa, _ as ea, $ as oa, a0 as ia, a1 as ta, a2 as la, a3 as na, a4 as ra, a5 as da, a6 as pa, a7 as ua, a8 as Ca, a9 as ya, aa as ca, ab as ma, ac as Pa, ad as Ra, ae as ga, af as Ja, ag as Ma, ah as Sa, ai as ha, aj as va, ak as Ia, al as ba, am as fa, an as Ta, ao as xa, ap as Fa, aq as Ba, ar as Aa, __tla as __tla_1 } from "./Game-05MmDeUc.js";
import { __tla as __tla_2 } from "./index-CTfEbLlb.js";
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
});
export {
  t as ActiveCollisionTypes,
  l as ActiveEvents,
  n as ActiveHooks,
  r as Ball,
  d as BroadPhase,
  p as CCDSolver,
  u as Capsule,
  C as CharacterCollision,
  y as CoefficientCombineRule,
  c as Collider,
  m as ColliderDesc,
  P as ColliderSet,
  R as ColliderShapeCastHit,
  g as ConvexPolygon,
  J as Cuboid,
  M as DebugRenderBuffers,
  S as DebugRenderPipeline,
  h as EventQueue,
  v as FeatureType,
  I as FixedImpulseJoint,
  b as FixedMultibodyJoint,
  f as HalfSpace,
  T as Heightfield,
  x as ImpulseJoint,
  F as ImpulseJointSet,
  B as IntegrationParameters,
  A as IslandManager,
  D as JointAxesMask,
  H as JointData,
  k as JointType,
  E as KinematicCharacterController,
  j as MassPropsMode,
  V as MotorModel,
  O as MultibodyJoint,
  Q as MultibodyJointSet,
  U as NarrowPhase,
  q as PhysicsPipeline,
  w as PidAxesMask,
  z as PidController,
  K as PointColliderProjection,
  N as PointProjection,
  W as Polyline,
  G as PrismaticImpulseJoint,
  L as PrismaticMultibodyJoint,
  X as QueryFilterFlags,
  Y as Ray,
  Z as RayColliderHit,
  _ as RayColliderIntersection,
  $ as RayIntersection,
  aa as RevoluteImpulseJoint,
  sa as RevoluteMultibodyJoint,
  ea as RigidBody,
  oa as RigidBodyDesc,
  ia as RigidBodySet,
  ta as RigidBodyType,
  la as RopeImpulseJoint,
  na as RotationOps,
  ra as RoundConvexPolygon,
  da as RoundCuboid,
  pa as RoundTriangle,
  ua as Segment,
  Ca as SerializationPipeline,
  ya as Shape,
  ca as ShapeCastHit,
  ma as ShapeContact,
  Pa as ShapeType,
  Ra as SolverFlags,
  ga as SpringImpulseJoint,
  Ja as TempContactForceEvent,
  Ma as TempContactManifold,
  Sa as TriMesh,
  ha as TriMeshFlags,
  va as Triangle,
  Ia as UnitImpulseJoint,
  ba as UnitMultibodyJoint,
  fa as Vector2,
  Ta as VectorOps,
  xa as Voxels,
  Fa as World,
  __tla,
  s as default,
  Ba as reserveMemory,
  Aa as version
};
