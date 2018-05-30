"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vega_util_1 = require("vega-util");
var util_1 = require("../../../util");
var selection_1 = require("../selection");
var nearest_1 = require("./nearest");
var inputBindings = {
    has: function (selCmpt) {
        return selCmpt.type === 'single' && selCmpt.resolve === 'global' &&
            selCmpt.bind && selCmpt.bind !== 'scales';
    },
    topLevelSignals: function (model, selCmpt, signals) {
        var name = selCmpt.name;
        var proj = selCmpt.project;
        var bind = selCmpt.bind;
        var datum = nearest_1.default.has(selCmpt) ?
            '(item().isVoronoi ? datum.datum : datum)' : 'datum';
        proj.forEach(function (p) {
            var sgname = util_1.varName(name + "_" + p.field);
            var hasSignal = signals.filter(function (s) { return s.name === sgname; });
            if (!hasSignal.length) {
                signals.unshift({
                    name: sgname,
                    value: '',
                    on: [{
                            events: selCmpt.events,
                            update: "datum && item().mark.marktype !== 'group' ? " + util_1.accessPathWithDatum(p.field, datum) + " : null"
                        }],
                    bind: bind[p.field] || bind[p.channel] || bind
                });
            }
        });
        return signals;
    },
    signals: function (model, selCmpt, signals) {
        var name = selCmpt.name;
        var proj = selCmpt.project;
        var signal = signals.filter(function (s) { return s.name === name + selection_1.TUPLE; })[0];
        var fields = proj.map(function (p) { return vega_util_1.stringValue(p.field); }).join(', ');
        var values = proj.map(function (p) { return util_1.varName(name + "_" + p.field); });
        if (values.length) {
            signal.update = values.join(' && ') + " ? {fields: [" + fields + "], values: [" + values.join(', ') + "]} : null";
        }
        delete signal.value;
        delete signal.on;
        return signals;
    }
};
exports.default = inputBindings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBpbGUvc2VsZWN0aW9uL3RyYW5zZm9ybXMvaW5wdXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXNDO0FBQ3RDLHNDQUEyRDtBQUMzRCwwQ0FBbUM7QUFDbkMscUNBQWdDO0FBSWhDLElBQU0sYUFBYSxHQUFxQjtJQUN0QyxHQUFHLEVBQUUsVUFBUyxPQUFPO1FBQ25CLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxRQUFRO1lBQzlELE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDOUMsQ0FBQztJQUVELGVBQWUsRUFBRSxVQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTztRQUMvQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFNLEtBQUssR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUM7WUFDckIsSUFBTSxNQUFNLEdBQUcsY0FBTyxDQUFJLElBQUksU0FBSSxDQUFDLENBQUMsS0FBTyxDQUFDLENBQUM7WUFDN0MsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ2QsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLEVBQUU7b0JBQ1QsRUFBRSxFQUFFLENBQUM7NEJBQ0gsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNOzRCQUN0QixNQUFNLEVBQUUsaURBQStDLDBCQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFlBQVM7eUJBQ3BHLENBQUM7b0JBQ0YsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJO2lCQUMvQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU8sRUFBRSxVQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTztRQUN2QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLGlCQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsdUJBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLGNBQU8sQ0FBSSxJQUFJLFNBQUksQ0FBQyxDQUFDLEtBQU8sQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7UUFFOUQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQWdCLE1BQU0sb0JBQWUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBVyxDQUFDO1NBQ3pHO1FBRUQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUVqQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3RyaW5nVmFsdWV9IGZyb20gJ3ZlZ2EtdXRpbCc7XG5pbXBvcnQge2FjY2Vzc1BhdGhXaXRoRGF0dW0sIHZhck5hbWV9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHtUVVBMRX0gZnJvbSAnLi4vc2VsZWN0aW9uJztcbmltcG9ydCBuZWFyZXN0IGZyb20gJy4vbmVhcmVzdCc7XG5pbXBvcnQge1RyYW5zZm9ybUNvbXBpbGVyfSBmcm9tICcuL3RyYW5zZm9ybXMnO1xuXG5cbmNvbnN0IGlucHV0QmluZGluZ3M6VHJhbnNmb3JtQ29tcGlsZXIgPSB7XG4gIGhhczogZnVuY3Rpb24oc2VsQ21wdCkge1xuICAgIHJldHVybiBzZWxDbXB0LnR5cGUgPT09ICdzaW5nbGUnICYmIHNlbENtcHQucmVzb2x2ZSA9PT0gJ2dsb2JhbCcgJiZcbiAgICAgIHNlbENtcHQuYmluZCAmJiBzZWxDbXB0LmJpbmQgIT09ICdzY2FsZXMnO1xuICB9LFxuXG4gIHRvcExldmVsU2lnbmFsczogZnVuY3Rpb24obW9kZWwsIHNlbENtcHQsIHNpZ25hbHMpIHtcbiAgICBjb25zdCBuYW1lID0gc2VsQ21wdC5uYW1lO1xuICAgIGNvbnN0IHByb2ogPSBzZWxDbXB0LnByb2plY3Q7XG4gICAgY29uc3QgYmluZCA9IHNlbENtcHQuYmluZDtcbiAgICBjb25zdCBkYXR1bSA9IG5lYXJlc3QuaGFzKHNlbENtcHQpID9cbiAgICAgICcoaXRlbSgpLmlzVm9yb25vaSA/IGRhdHVtLmRhdHVtIDogZGF0dW0pJyA6ICdkYXR1bSc7XG5cbiAgICBwcm9qLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgY29uc3Qgc2duYW1lID0gdmFyTmFtZShgJHtuYW1lfV8ke3AuZmllbGR9YCk7XG4gICAgICBjb25zdCBoYXNTaWduYWwgPSBzaWduYWxzLmZpbHRlcigocykgPT4gcy5uYW1lID09PSBzZ25hbWUpO1xuICAgICAgaWYgKCFoYXNTaWduYWwubGVuZ3RoKSB7XG4gICAgICAgIHNpZ25hbHMudW5zaGlmdCh7XG4gICAgICAgICAgbmFtZTogc2duYW1lLFxuICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICBvbjogW3tcbiAgICAgICAgICAgIGV2ZW50czogc2VsQ21wdC5ldmVudHMsXG4gICAgICAgICAgICB1cGRhdGU6IGBkYXR1bSAmJiBpdGVtKCkubWFyay5tYXJrdHlwZSAhPT0gJ2dyb3VwJyA/ICR7YWNjZXNzUGF0aFdpdGhEYXR1bShwLmZpZWxkLCBkYXR1bSl9IDogbnVsbGBcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBiaW5kOiBiaW5kW3AuZmllbGRdIHx8IGJpbmRbcC5jaGFubmVsXSB8fCBiaW5kXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25hbHM7XG4gIH0sXG5cbiAgc2lnbmFsczogZnVuY3Rpb24obW9kZWwsIHNlbENtcHQsIHNpZ25hbHMpIHtcbiAgICBjb25zdCBuYW1lID0gc2VsQ21wdC5uYW1lO1xuICAgIGNvbnN0IHByb2ogPSBzZWxDbXB0LnByb2plY3Q7XG4gICAgY29uc3Qgc2lnbmFsID0gc2lnbmFscy5maWx0ZXIoKHMpID0+IHMubmFtZSA9PT0gbmFtZSArIFRVUExFKVswXTtcbiAgICBjb25zdCBmaWVsZHMgPSBwcm9qLm1hcCgocCkgPT4gc3RyaW5nVmFsdWUocC5maWVsZCkpLmpvaW4oJywgJyk7XG4gICAgY29uc3QgdmFsdWVzID0gcHJvai5tYXAoKHApID0+IHZhck5hbWUoYCR7bmFtZX1fJHtwLmZpZWxkfWApKTtcblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBzaWduYWwudXBkYXRlID0gYCR7dmFsdWVzLmpvaW4oJyAmJiAnKX0gPyB7ZmllbGRzOiBbJHtmaWVsZHN9XSwgdmFsdWVzOiBbJHt2YWx1ZXMuam9pbignLCAnKX1dfSA6IG51bGxgO1xuICAgIH1cblxuICAgIGRlbGV0ZSBzaWduYWwudmFsdWU7XG4gICAgZGVsZXRlIHNpZ25hbC5vbjtcblxuICAgIHJldHVybiBzaWduYWxzO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbnB1dEJpbmRpbmdzO1xuIl19