"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLogicalOr(op) {
    return !!op.or;
}
exports.isLogicalOr = isLogicalOr;
function isLogicalAnd(op) {
    return !!op.and;
}
exports.isLogicalAnd = isLogicalAnd;
function isLogicalNot(op) {
    return !!op.not;
}
exports.isLogicalNot = isLogicalNot;
function forEachLeaf(op, fn) {
    if (isLogicalNot(op)) {
        forEachLeaf(op.not, fn);
    }
    else if (isLogicalAnd(op)) {
        for (var _i = 0, _a = op.and; _i < _a.length; _i++) {
            var subop = _a[_i];
            forEachLeaf(subop, fn);
        }
    }
    else if (isLogicalOr(op)) {
        for (var _b = 0, _c = op.or; _b < _c.length; _b++) {
            var subop = _c[_b];
            forEachLeaf(subop, fn);
        }
    }
    else {
        fn(op);
    }
}
exports.forEachLeaf = forEachLeaf;
function normalizeLogicalOperand(op, normalizer) {
    if (isLogicalNot(op)) {
        return { not: normalizeLogicalOperand(op.not, normalizer) };
    }
    else if (isLogicalAnd(op)) {
        return { and: op.and.map(function (o) { return normalizeLogicalOperand(o, normalizer); }) };
    }
    else if (isLogicalOr(op)) {
        return { or: op.or.map(function (o) { return normalizeLogicalOperand(o, normalizer); }) };
    }
    else {
        return normalizer(op);
    }
}
exports.normalizeLogicalOperand = normalizeLogicalOperand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWNhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dpY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0EscUJBQTRCLEVBQXVCO0lBQ2pELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDakIsQ0FBQztBQUZELGtDQUVDO0FBRUQsc0JBQTZCLEVBQXVCO0lBQ2xELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDbEIsQ0FBQztBQUZELG9DQUVDO0FBRUQsc0JBQTZCLEVBQXVCO0lBQ2xELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDbEIsQ0FBQztBQUZELG9DQUVDO0FBRUQscUJBQStCLEVBQXFCLEVBQUUsRUFBbUI7SUFDdkUsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDcEIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDekI7U0FBTSxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUMzQixLQUFvQixVQUFNLEVBQU4sS0FBQSxFQUFFLENBQUMsR0FBRyxFQUFOLGNBQU0sRUFBTixJQUFNO1lBQXJCLElBQU0sS0FBSyxTQUFBO1lBQ2QsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN4QjtLQUNGO1NBQU0sSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDMUIsS0FBb0IsVUFBSyxFQUFMLEtBQUEsRUFBRSxDQUFDLEVBQUUsRUFBTCxjQUFLLEVBQUwsSUFBSztZQUFwQixJQUFNLEtBQUssU0FBQTtZQUNkLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEI7S0FDRjtTQUFNO1FBQ0wsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ1I7QUFDSCxDQUFDO0FBZEQsa0NBY0M7QUFFRCxpQ0FBMkMsRUFBcUIsRUFBRSxVQUF1QjtJQUN2RixJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNwQixPQUFPLEVBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUMsQ0FBQztLQUMzRDtTQUFNLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzNCLE9BQU8sRUFBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQXRDLENBQXNDLENBQUMsRUFBQyxDQUFDO0tBQ3ZFO1NBQU0sSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDMUIsT0FBTyxFQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLHVCQUF1QixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxFQUFDLENBQUM7S0FDckU7U0FBTTtRQUNMLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQztBQVZELDBEQVVDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTG9naWNhbE9wZXJhbmQ8VD4gPSBMb2dpY2FsTm90PFQ+IHwgTG9naWNhbEFuZDxUPiB8IExvZ2ljYWxPcjxUPiB8IFQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naWNhbE9yPFQ+IHtcbiAgb3I6IExvZ2ljYWxPcGVyYW5kPFQ+W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naWNhbEFuZDxUPiB7XG4gIGFuZDogTG9naWNhbE9wZXJhbmQ8VD5bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dpY2FsTm90PFQ+IHtcbiAgbm90OiBMb2dpY2FsT3BlcmFuZDxUPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9naWNhbE9yKG9wOiBMb2dpY2FsT3BlcmFuZDxhbnk+KTogb3AgaXMgTG9naWNhbE9yPGFueT4ge1xuICByZXR1cm4gISFvcC5vcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9naWNhbEFuZChvcDogTG9naWNhbE9wZXJhbmQ8YW55Pik6IG9wIGlzIExvZ2ljYWxBbmQ8YW55PiB7XG4gIHJldHVybiAhIW9wLmFuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9naWNhbE5vdChvcDogTG9naWNhbE9wZXJhbmQ8YW55Pik6IG9wIGlzIExvZ2ljYWxOb3Q8YW55PiB7XG4gIHJldHVybiAhIW9wLm5vdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hMZWFmPFQ+KG9wOiBMb2dpY2FsT3BlcmFuZDxUPiwgZm46IChvcDogVCkgPT4gdm9pZCkge1xuICBpZiAoaXNMb2dpY2FsTm90KG9wKSkge1xuICAgIGZvckVhY2hMZWFmKG9wLm5vdCwgZm4pO1xuICB9IGVsc2UgaWYgKGlzTG9naWNhbEFuZChvcCkpIHtcbiAgICBmb3IgKGNvbnN0IHN1Ym9wIG9mIG9wLmFuZCkge1xuICAgICAgZm9yRWFjaExlYWYoc3Vib3AsIGZuKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNMb2dpY2FsT3Iob3ApKSB7XG4gICAgZm9yIChjb25zdCBzdWJvcCBvZiBvcC5vcikge1xuICAgICAgZm9yRWFjaExlYWYoc3Vib3AsIGZuKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm4ob3ApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2dpY2FsT3BlcmFuZDxUPihvcDogTG9naWNhbE9wZXJhbmQ8VD4sIG5vcm1hbGl6ZXI6IChvOiBUKSA9PiBUKTogTG9naWNhbE9wZXJhbmQ8VD4ge1xuICBpZiAoaXNMb2dpY2FsTm90KG9wKSkge1xuICAgIHJldHVybiB7bm90OiBub3JtYWxpemVMb2dpY2FsT3BlcmFuZChvcC5ub3QsIG5vcm1hbGl6ZXIpfTtcbiAgfSBlbHNlIGlmIChpc0xvZ2ljYWxBbmQob3ApKSB7XG4gICAgcmV0dXJuIHthbmQ6IG9wLmFuZC5tYXAobyA9PiBub3JtYWxpemVMb2dpY2FsT3BlcmFuZChvLCBub3JtYWxpemVyKSl9O1xuICB9IGVsc2UgaWYgKGlzTG9naWNhbE9yKG9wKSkge1xuICAgIHJldHVybiB7b3I6IG9wLm9yLm1hcChvID0+IG5vcm1hbGl6ZUxvZ2ljYWxPcGVyYW5kKG8sIG5vcm1hbGl6ZXIpKX07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZXIob3ApO1xuICB9XG59XG4iXX0=